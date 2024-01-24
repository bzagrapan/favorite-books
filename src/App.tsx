import './App.css';
import CustomButton from './components/atoms/Button/Button';
import CustomInput from './components/atoms/Input/Input';
import SavedBook from './components/molecules/SavedBook/SavedBook';

function App() {
  const handleInputChange = (newValue: string) => {
    console.log(newValue);
  };

  //TODO tests
  return (
    <div className="App">
      <CustomButton text="Uložiť" />
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
      />
      <div style={{ margin: '20px' }}></div>
      <SavedBook name="Pietro Mascarpone a asdf sdfdsf sdfds fd sd" />
    </div>
  );
}

export default App;
