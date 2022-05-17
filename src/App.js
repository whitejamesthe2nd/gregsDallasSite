import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home></Home>
       <Login />
       <Comments />
      </header>
    </div>
  );
}

export default App;
