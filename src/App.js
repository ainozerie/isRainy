import { useSelector } from 'react-redux';
import Header from './Header';
import './light.css';
import Search from './Search';

function App() {
  
  // const darkMode = useSelector(state => state.darkMode);
  // (darkMode) ? import('./light.css') : import('./dark.css')


  return (
    <div>
      <Header />
      <main>
        <Search />

      </main>
      <footer><p>Created by Sergei Ainozerov</p></footer>
    </div>
  );
}

export default App;
