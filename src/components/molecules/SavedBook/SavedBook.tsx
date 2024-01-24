import React, { useState } from 'react';
import './SavedBook.scss';
import { ISavedBook } from '../../../models/book';
import Modal from 'react-modal';

export interface SavedBookProps extends ISavedBook {}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #a52a2a',
  },
};

const SavedBook: React.FC<SavedBookProps> = (props) => {
  const { name, author, description } = props;

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <div className="saved-book" onClick={() => setIsDetailOpen(true)}>
        {name}
      </div>
      <Modal
        isOpen={isDetailOpen}
        style={customStyles}
        contentLabel="Book detail"
        onRequestClose={() => setIsDetailOpen(false)}
        shouldCloseOnOverlayClick
        ariaHideApp={false}
      >
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
      </Modal>
    </>
  );
};

export default SavedBook;
