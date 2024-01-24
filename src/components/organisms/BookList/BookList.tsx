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
      {books.map((book: ISavedBook, index: number) => (
        <SavedBook {...book} key={index} />
      ))}
    </div>
  );
};

export default BookList;
