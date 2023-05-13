import { Route } from 'react-router-dom';
import './App.css';
import homepage from "./pages/Homepage"
import Chatpage from './pages/Chatpage';
function App() {
  return (
    <div className="App">
      <Route path='/' component={homepage} exact/>
      <Route path='/chats ' component={Chatpage}/>
    </div>
  );
}

export default App;
