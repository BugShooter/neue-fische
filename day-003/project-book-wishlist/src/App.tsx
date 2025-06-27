import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Book = {
  id: number;
  title: string;
  author: string;
  read: boolean;
}
type BookDraft = Omit<Book, 'id'>

function App() {
  const initialBooks: Book[] = [
    { id: 1, title: 'Dune', author: 'Frank Herbert', read: true },
    { id: 2, title: 'The Discoworld', author: 'Terry Pratchett', read: false },
    { id: 3, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', read: true },
    { id: 4, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', read: false },
    { id: 5, title: '1984', author: 'George Orwell', read: false }
  ];
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [isNewBookFormShowed, setIsNewBookFormShowed] = useState<boolean>(false);


  // DONE: Add a book
  const addNewBookHandler = (bookDraft: BookDraft) => {
    const book: Book = {
      id: Math.max(0, ...books.map(b => b.id)) + 1,
      ...bookDraft
    }

    setBooks([...books, book]);
    setIsNewBookFormShowed(false);
  }
  const bookForm = isNewBookFormShowed ? (<BookForm onSubmit={addNewBookHandler} onCancel={() => setIsNewBookFormShowed(false)} />) : null;

  // TODO: Mark a book as read/unread
  const toggleReadStatus = (bookId: number) => {
    setBooks(books.map(b => {
      if (b.id === bookId) {
        b.read = !b.read;
      }
      return b;
    }));
  }

  // DONE: Remove a book
  const removeBookHandler = (bookId: number) => {
    setBooks(books.filter(b => b.id !== bookId));
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Book Wishlist</h1>
      <div className='book-list'>
        {books.map(book => (
          <BookItem book={book} removeBook={removeBookHandler} toggleReadStatus={toggleReadStatus} />
        ))}
      </div>
      <div>
        {!isNewBookFormShowed && (
          <button onClick={
            () => setIsNewBookFormShowed(true)
          }>Add new book</button>
        )}
      </div>
      <div>{bookForm}
      </div>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const BookItem = ({ book, removeBook, toggleReadStatus }: { book: Book, removeBook: (id: number) => void, toggleReadStatus: (id: number) => void }) => {
  return (
    <div key={book.id}>
      <input type="checkbox" checked={book.read} onChange={() => toggleReadStatus(book.id)} />
      <span>"{book.title}"</span> <span>by {book.author}</span>
      <button onClick={() => removeBook(book.id)}>Delete</button></div>
  )
}

const BookForm = ({ onSubmit, onCancel }: { onSubmit: (bookDraft: BookDraft) => void, onCancel: () => void }) => {
  const [draftBook, setDraftBook] = useState<BookDraft>({
    title: '',
    author: '',
    read: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({

  })
  const validate = () => {
    let errors = {};
    if (draftBook.title.length === 0) errors = { ...errors, title: 'Title is empty' };
    if (draftBook.author.length === 0) errors = { ...errors, author: 'Author is empty' };
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  return (
    <>
      <h2>Add a book in the library</h2>
      <form className='book-create-form'>
        <label>Title:</label>
        <input type="text" value={draftBook.title} onChange={e => setDraftBook({ ...draftBook, title: e.target.value })}></input>
        {errors.title && (<span className="form-error">{errors.title}</span>)}
        <label>Author:</label>
        <input type="text" value={draftBook.author} onChange={e => setDraftBook({ ...draftBook, author: e.target.value })}></input>
        {errors.author && (<span className="form-error">{errors.author}</span>)}
        <div className='form-controls'>
          <button type='button' onClick={() => {
            if (validate()) onSubmit(draftBook)
          }}>Add </button>
          <button type='button' onClick={() => onCancel()}>Cancel</button>
        </div>
      </form >
    </>
  )
}

export default App
