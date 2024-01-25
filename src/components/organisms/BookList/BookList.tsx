import React from 'react';
import './BookList.scss';
import { ISavedBook } from '../../../models/book';
import SavedBook from '../../molecules/SavedBook/SavedBook';

export interface BookListProps {
  books: ISavedBook[];
}

const BookList: React.FC<BookListProps> = (props) => {
  const { books } = props;

  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book: ISavedBook, index: number) => (
          <SavedBook {...book} key={index} />
        ))
      ) : (
        <div className="empty">
          Your list of favorite books is empty. Add some books firstly, or
          change the filter.
        </div>
      )}
    </div>
  );
};

export default BookList;
