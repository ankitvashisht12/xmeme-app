import Header from './components/header/Header';
import Container from './components/container/Container'
import './App.css';

function App() {

  console.log('app rendering');
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
