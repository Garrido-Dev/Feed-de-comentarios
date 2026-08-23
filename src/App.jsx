import { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  // 🔄 Buscar comentários do Firestore em tempo real
  useEffect(() => {
    // Referência para a coleção "comments", ordenada do mais novo para o mais antigo
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    
    // Escuta as mudanças em tempo real
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = [];
      snapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsData);
    });

    // Limpa o listener quando o componente desmontar
    return () => unsubscribe();
  }, []);

  // ✉️ Enviar novo comentário para o Firestore
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await addDoc(collection(db, "comments"), {
        author: author,
        content: content,
        createdAt: serverTimestamp() // 👈 usa o horário do servidor do Firebase
      });

      // Limpa os campos após enviar
      setAuthor('');
      setContent('');
    } catch (error) {
      console.error("Erro ao salvar comentário:", error);
      alert("Erro ao enviar comentário. Tente novamente.");
    }
  };

  return (
    <div id="app">
      <h2>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
          type="email" 
          id='author' 
          required 
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <label htmlFor="content">Comentário</label>
        <textarea 
          id="content" 
          cols='30' 
          rows='6' 
          required 
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        />
        <button type='submit'>Enviar Comentário</button>
      </form>
      <hr />
      <section id='coments'>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              {/* 👇 Verifica se createdAt existe antes de chamar toLocaleString */}
              <span>Em: {comment.createdAt?.toDate?.()?.toLocaleString() || 'Data indisponível'}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  );
}

export default App;
