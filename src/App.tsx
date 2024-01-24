import { useState } from 'react';
import './App.scss';
import AddBook from './components/molecules/AddBook/AddBook';
import { ISavedBook } from './models/book';
import BookList from './components/organisms/BookList/BookList';
import CustomInput from './components/atoms/Input/Input';
import _ from 'lodash';

function App() {
  const [savedBooks, setSavedBooks] = useState<ISavedBook[]>([]);
  const [filter, setFilter] = useState<string>();

  const handleBookSave = (newBook: ISavedBook) => {
    setSavedBooks([...savedBooks, newBook]);
  };

  const filteredBooks: ISavedBook[] = !filter
    ? savedBooks
    : _.filter(savedBooks, (book: ISavedBook) => {
        return book.title.includes(filter);
      });

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
          <div className="header-wrapper">
            <div>List of saved books</div>
            <div>
              <div className="book-filter">
                <b className="book-filter-label">Filter:</b>
                <CustomInput
                  placeholder="Book title"
                  onInputChange={(newValue: string) => setFilter(newValue)}
                />
              </div>
            </div>
          </div>
          <BookList books={filteredBooks} />
        </div>
      </div>
    </div>
  );
}

export default App;
