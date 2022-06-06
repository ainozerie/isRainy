import { useSelector } from 'react-redux';
import Data from './Data';
import Header from './Header';
import './light.css'
import Search from './Search';

function App() {
  const darkMode = useSelector(state => state.darkMode)
  return (
    <div className={darkMode ? 'app dark-theme' : 'app light-theme'}>
      <Header />
      <main>
        <Search />
        <Data />
      </main>
      <footer><p>Created by Sergei Ainozerov</p></footer>
    </div>
  );
}

export default App;
