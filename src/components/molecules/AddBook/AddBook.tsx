import React, { useState } from 'react';
import './AddBook.scss';
import CustomInput from '../../atoms/Input/Input';
import CustomButton from '../../atoms/Button/Button';

export interface AddBookProps {
  onBookSave: Function;
}

const AddBook: React.FC<AddBookProps> = (props) => {
  const { onBookSave } = props;
  const [saveError, setSaveError] = useState(false);
  const [bookAuthor, setBookAuthor] = useState<string>();
  const [bookTitle, setBookTitle] = useState<string>();
  const [bookDescription, setBookDescription] = useState<string>();

  const handleBookSave = () => {
    if (!bookTitle) {
      setSaveError(true);
      return;
    }

    onBookSave({
      author: bookAuthor,
      title: bookTitle,
      description: bookDescription,
    });
  };

  return (
    <div className="add-book-wrapper">
      <div className="add-book-row">
        <b className="add-book-row-label">Title:</b>
        <CustomInput
          placeholder="Book title"
          displayWarning={saveError}
          warningText="*Mandatory field"
          onInputChange={(newValue: string) => setBookTitle(newValue)}
        />
      </div>
      <div className="add-book-row">
        <b className="add-book-row-label">Author:</b>
        <CustomInput
          placeholder="Book author"
          onInputChange={(newValue: string) => setBookAuthor(newValue)}
        />
      </div>
      <div className="add-book-row big-margin">
        <b className="add-book-row-label">Description:</b>
        <CustomInput
          placeholder="Book description"
          onInputChange={(newValue: string) => setBookDescription(newValue)}
        />
      </div>
      <CustomButton text="Save" onClick={() => handleBookSave()} />
    </div>
  );
};

export default AddBook;
