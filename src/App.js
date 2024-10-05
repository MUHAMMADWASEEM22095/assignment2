import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Title from './Components/Title';
import Footer from './Components/Footer';
import Complain from './Components/Complain';
function App() {
  return (
    <div className="App">
      <Complain/>
      <Title/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
