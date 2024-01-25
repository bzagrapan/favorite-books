import React, { useState } from 'react';
import './SavedBook.scss';
import { ISavedBook } from '../../../models/book';
import Modal from 'react-modal';
import BookDetail from '../../atoms/BookDetail/BookDetail';
import BookLogo from '../../../assets/book.svg';

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
    maxWidth: '350px',
    padding: '25px',
    overflow: 'auto',
    maxHeight: '600px',
  },
};

const SavedBook: React.FC<SavedBookProps> = (props) => {
  const { title } = props;

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <div className="saved-book" onClick={() => setIsDetailOpen(true)}>
        <img alt="Book icon" src={BookLogo} height={20} />
        <span>{title}</span>
      </div>
      <Modal
        isOpen={isDetailOpen}
        style={customStyles}
        contentLabel="Book detail"
        onRequestClose={() => setIsDetailOpen(false)}
        shouldCloseOnOverlayClick
        ariaHideApp={false}
      >
        <div className="close-button" onClick={() => setIsDetailOpen(false)}>
          X
        </div>
        <BookDetail {...props} />
      </Modal>
    </>
  );
};

export default SavedBook;
