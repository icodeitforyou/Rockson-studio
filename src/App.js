import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AboutCase from './components/AboutCase';
function App() {
  return (
    <div className="main_content">
      <Header/>
      <HeroBanner/>
      <AboutCase/>
    </div>
  );
}

export default App;
