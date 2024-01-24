import React, { useState } from 'react';
import './SavedBook.scss';
import { ISavedBook } from '../../../models/book';
import Modal from 'react-modal';
import BookDetail from '../../atoms/BookDetail/BookDetail';

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
  const { title } = props;

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <div className="saved-book" onClick={() => setIsDetailOpen(true)}>
        {title}
      </div>
      <Modal
        isOpen={isDetailOpen}
        style={customStyles}
        contentLabel="Book detail"
        onRequestClose={() => setIsDetailOpen(false)}
        shouldCloseOnOverlayClick
        ariaHideApp={false}
      >
        <BookDetail {...props} />
      </Modal>
    </>
  );
};

export default SavedBook;
