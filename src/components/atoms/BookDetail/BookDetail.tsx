import React from 'react';
import './BookDetail.scss';
import { ISavedBook } from '../../../models/book';

export interface BookDetailProps extends ISavedBook {}

const BookDetail: React.FC<BookDetailProps> = (props) => {
  const { name, author, description } = props;

  return (
    <div>
      <div className="book-detail-row">
        <b>Name:</b>
        <span>{name}</span>
      </div>
      <div className="book-detail-row">
        <b>Author:</b>
        <span>{author}</span>
      </div>
      <div className="book-detail-row">
        <b>Description:</b>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default BookDetail;
