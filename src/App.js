import './App.css';
import Navbar from './components/Navbar';
import MainProductText from './components/MainProductText';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='container-fluid'>
        <div className='row main-product main-ipad'>
          <div className='col-6'>

          </div>
          <div className='col-6 main-ipad-right'>
            <MainProductText header='iPad' desc='Lovable. Drawable. Magical' />
          </div>
        </div>
        <div className='row main-product main-ipad-pro'>
          <div className='col-4 main-ipad-pro-left'>
            <MainProductText header='iPad Pro' desc='Supercharged by M2' />
          </div>
          <div className='col-8'>

          </div>
        </div>
        <div className='row main-product main-iphone-14'>
          <div className='row-fluid main-iphone-14-top'>
            <MainProductText header='iPhone 14 Pro' desc='Pro. Beyond.' />
          </div>
          <div className='row-fluid main-iphone-14-bottom'>

          </div>
        </div>

        <div className='row'>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='iPhone 14' desc='Big and bigger.' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>
          </div>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple TV 4k' desc='The Apple Experience. Cinematic in every sense.' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>            
          </div>
        </div>
        <div className='row'>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple Watch Ultra' desc='Adventure Awaits.' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>
          </div>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple Watch Series 8' desc='A healthy leap ahead.' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>            
          </div>
        </div>
        <div className='row'>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Fitness +' desc='Fitness for everyone. Now all you need is iPhone.' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>
          </div>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple Card' desc='Get up to 3% daily cash back with every purchase.' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>            
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
