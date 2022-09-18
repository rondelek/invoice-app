import '../../scss/App.scss';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';

function App() {
  return (
    <div className='app'>
      <Menu/>
      <Home/>
    </div>    
  );
}

export default App;
