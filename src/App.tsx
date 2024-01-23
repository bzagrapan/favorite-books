import './App.css';
import CustomButton from './components/atoms/Button/Button';
import CustomInput from './components/atoms/Input/Input';

function App() {
  const handleInputChange = (newValue: string) => {
    console.log(newValue);
  };

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
    </div>
  );
}

export default App;
