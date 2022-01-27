import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 
import About from './components/about';
import Home from './components/Home';
import Photos from './components/Photos';
import './header.css';

function App() {
  return (
    <div className="App">
        <Router>
          <div className="header">
              <Link to="/" className="link">Home</Link>
              <Link to="/about" className="link">About</Link>
          </div>

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route path ="/album/:id" element={<Photos/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

