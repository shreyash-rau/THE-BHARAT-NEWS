
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Cards from './components/News-Cards/Cards';
// import Slider from './components/Slider/Slider';

function App() {
  return (
      <>
          <Navbar />
          <br /><br />

          <div className='car'> <Cards /></div>

      </>
  );
}

export default App;
