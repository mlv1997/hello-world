import React, { useState } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState('');
  const [books, setBooks] = useState([]);

  const addBook = () => {
    if (book.trim()) {
      setBooks([...books, book.trim()]);
      setBook('');
    }
  };

  return (
    <div className="container">
      <h1>List of Books</h1>
      <div className="input-group">
        <input
          placeholder="Enter book title"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          data-testid="input"
        />
        <button onClick={addBook} data-testid="button">Add Book</button>
      </div>
      <ul data-testid="list">
        {books.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
