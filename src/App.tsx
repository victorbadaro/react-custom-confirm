import { GlobalStyle } from './styles/global';

export function App() {
  
  function handleButtonClick() {
    console.log('clicou no botão...');
  }

  return (
    <>
      <GlobalStyle />

      <h1>Hello</h1>
      <button
        type="button"
        style={{
          backgroundColor: 'blueviolet',
          color: 'white'
        }}
        onClick={handleButtonClick}
      >
        Open Confirm Component
      </button>
    </>
  );
}