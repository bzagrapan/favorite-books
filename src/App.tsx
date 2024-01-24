import { useState } from 'react';
import './App.scss';
import AddBook from './components/molecules/AddBook/AddBook';
import { ISavedBook } from './models/book';
import BookList from './components/organisms/BookList/BookList';

function App() {
  const [savedBooks, setSavedBooks] = useState<ISavedBook[]>([]);

  const handleInputChange = (newValue: string) => {
    console.log(newValue);
  };

  const handleBookSave = (newBook: ISavedBook) => {
    console.log(newBook);
    setSavedBooks([...savedBooks, newBook]);
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="first-section">
          <div className="header-wrapper">
            Please, enter informations about your new favorite book.
          </div>
          <AddBook onBookSave={handleBookSave} />
        </div>
        <div className="second-section">
          <div className="header-wrapper">List of saved books</div>
          <BookList books={savedBooks} />
        </div>
      </div>
    </div>
  );
}

export default App;
