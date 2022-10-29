import './App.css';
import Navbar from './components/Navbar';
import MainProductText from './components/MainProductText';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='container-fluid'>
        <div className='row main-product main-ipad'>
          <div className='col-6 main-ipad-left'>
            <img src={require('./components/component-imgs/ipad-min.png')}
            alt='iPads stacked on top of one another' className='main-product-image ipads-img'></img>
          </div>
          <div className='col-6 main-ipad-right'>
            <MainProductText header='iPad' desc='Lovable. Drawable. Magical' className='main-product-text' />
          </div>
        </div>

        <div className='row main-product main-ipad-pro'>
          <div className='col-4 main-ipad-pro-left'>
            <MainProductText header='iPad Pro' desc='Supercharged by M2' className='main-product-text white-text' />
          </div>
          <div className='col-8 main-ipad-pro-right'>
            <img src={require('./components/component-imgs/ipad-pro-min.png')}
            alt='iPad Pro' className='main-product-image'></img>
          </div>
        </div>

        <div className='row main-product main-iphone-14'>
          <div className='row-fluid main-iphone-14-top'>
            <MainProductText header='iPhone 14 Pro' desc='Pro. Beyond.' className='main-product-text white-text' />
          </div>
          <div className='row-fluid main-iphone-14-bottom'>
            <img src={require('./components/component-imgs/iphone-14-pro-min.png')}
            alt='iPhone 14 Pro' className='main-product-image'></img>
          </div>
        </div>

        <div className='row'>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='iPhone 14' desc='Big and bigger.' className='main-product-text' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>
          </div>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple TV 4k' desc='The Apple Experience. Cinematic in every sense.' className='main-product-text' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>            
          </div>
        </div>
        <div className='row'>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple Watch Ultra' desc='Adventure Awaits.' className='main-product-text' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>
          </div>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple Watch Series 8' desc='A healthy leap ahead.' className='main-product-text' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>            
          </div>
        </div>
        <div className='row'>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Fitness +' desc='Fitness for everyone. Now all you need is iPhone.' className='main-product-text' />
            </div>
            <div className='row-fluid sub-product-bottom'>

            </div>
          </div>
          <div className='col-6 sub-product'>
            <div className='row-fluid sub-product-top'>
              <MainProductText header='Apple Card' desc='Get up to 3% daily cash back with every purchase.' className='main-product-text' />
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
