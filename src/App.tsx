import './App.scss';
import AddBook from './components/molecules/AddBook/AddBook';
import SavedBook from './components/molecules/SavedBook/SavedBook';
import { ISavedBook } from './models/book';

function App() {
  const handleInputChange = (newValue: string) => {
    console.log(newValue);
  };

  const handleBookSave = (newBook: ISavedBook) => {
    console.log(newBook);
  };

  return (
    <div className="App">
      <AddBook onBookSave={(newBook: ISavedBook) => handleBookSave(newBook)} />
      <div style={{ margin: '20px' }}></div>
      <SavedBook title="Pietro Mascarpone a asdf sdfdsf sdfds fd sd" />
    </div>
  );
}

export default App;
