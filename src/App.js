import './App.css';
import Navbar from './components/Navbar';
import MainProducts from './components/MainProducts';
import SubProducts from './components/SubProducts';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='container-fluid'>
        <MainProducts />
        <SubProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
