import './App.css';
import Footer from './components/Footer';
import Fsec from './components/Fsec';
import Ssec from './components/Ssec';
import Header from './components/Header';
import Pref from './components/Pref';

function App() {
  return (
    <div className="App">
      <Header />
      <Fsec />
      <Ssec />
      <Pref />
      <Footer />
    </div>
  );
}

export default App;
