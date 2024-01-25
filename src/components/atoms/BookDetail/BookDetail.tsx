import React from 'react';
import './BookDetail.scss';
import { ISavedBook } from '../../../models/book';

export interface BookDetailProps extends ISavedBook {}

const BookDetail: React.FC<BookDetailProps> = (props) => {
  const { title, author, description } = props;

  return (
    <div className="book-detail-wrapper">
      <b>Title:</b>
      <span>{title}</span>
      <b>Author:</b>
      <span>{author ? author : 'unspecified author'}</span>
      <b>Description:</b>
      <span>{description ? description : 'unspecified description'}</span>
    </div>
  );
};

export default BookDetail;
