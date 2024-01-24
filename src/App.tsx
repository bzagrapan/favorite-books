import './App.css';
import CustomButton from './components/atoms/Button/Button';
import CustomInput from './components/atoms/Input/Input';
import AddBook from './components/molecules/AddBook/AddBook';
import SavedBook from './components/organisms/SavedBook/SavedBook';
import { ISavedBook } from './models/book';

function App() {
  const handleInputChange = (newValue: string) => {
    console.log(newValue);
  };

  const handleBookSave = (newBook: ISavedBook) => {
    console.log(newBook);
  };

  //TODO tests
  return (
    <div className="App">
      {/* <CustomButton text="Uložiť" />
      <div style={{ margin: '20px' }}></div>
      <CustomInput
        placeholder="test haha"
        onInputChange={handleInputChange}
        maxChars={10}
      />
      <div style={{ margin: '20px' }}></div>
      <CustomInput
        placeholder="test haha"
        onInputChange={handleInputChange}
        maxChars={10}
        displayWarning={true}
        warningText="*Povinne pole"
      /> */}
      <AddBook onBookSave={(newBook: ISavedBook) => handleBookSave(newBook)} />
      <div style={{ margin: '20px' }}></div>
      <SavedBook title="Pietro Mascarpone a asdf sdfdsf sdfds fd sd" />
    </div>
  );
}

export default App;
