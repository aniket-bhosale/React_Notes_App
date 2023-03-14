import './App.css';
import Header from './components/notes/Header';

import ListNotes from './components/notes/ListNotes';
import Search from './components/notes/Search';

function App() {
  return (

    <div> 
        <Header/>
        <Search/>
        <ListNotes/>
    </div>
    
  );
}

export default App;
