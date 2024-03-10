import Nav from './Components/Nav'
import NextPage from './Components/page/NextPage.js';
import './App.css';
const App = () => {
  // State variables
  return (
    <div className="grid grid-cols-5">
      {/* <header className="pokemon-header"> Pokemon</header> */}
      <Nav />
      <main className='col-span-4 bg-cyan-800'>
        POKEMON
        <NextPage />
      </main>

    </div>
  );
};

export default App;
