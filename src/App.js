import './App.css';
import Footer from './Component/Footer/Footer';

import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
