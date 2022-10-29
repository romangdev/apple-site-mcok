import './App.css';
import Navbar from './components/Navbar';
import ProductText from './components/ProductText';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='container-fluid'>
        <div className='row main-product main-ipad'>
          <div className='col-xs-12 col-md-6 order-2 order-md-1 main-ipad-left'>
            <img src={require('./components/component-imgs/ipad-min.png')}
            alt='iPads stacked on top of one another' className='main-product-image ipads-img'></img>
          </div>
          <div className='col-xs-12 col-md-6 order-1 order-md-2 main-ipad-right'>
            <ProductText header='iPad' desc='Lovable. Drawable. Magical' className='product-text' />
          </div>
        </div>

        <div className='row main-product main-ipad-pro'>
          <div className='col-xs-12 col-md-4 main-ipad-pro-left'>
            <ProductText header='iPad Pro' desc='Supercharged by M2' className='product-text white-text' />
          </div>
          <div className='col-xs-12 col-md-8 main-ipad-pro-right'>
            <img src={require('./components/component-imgs/ipad-pro-min.png')}
            alt='iPad Pro' className='main-product-image'></img>
          </div>
        </div>

        <div className='row main-product main-iphone-14'>
          <div className='row-fluid main-iphone-14-top'>
            <ProductText header='iPhone 14 Pro' desc='Pro. Beyond.' className='product-text white-text' />
          </div>
          <div className='row-fluid main-iphone-14-bottom'>
            <img src={require('./components/component-imgs/iphone-14-pro-min.png')}
            alt='iPhone 14 Pro' className='main-product-image main-iphone-14-img'></img>
          </div>
        </div>


        <div className='row'>
          <div className='col-xs-12 col-lg-6 sub-product'>
            <div className='row-fluid sub-product-top sub-iphone-14'>
              <ProductText header='iPhone 14' desc='Big and bigger.' className='product-text' />
            </div>
            <div className='row-fluid sub-product-bottom sub-iphone-14'>
              <img src={require('./components/component-imgs/iphone-14-min.png')} alt='iPhone 14'></img>
            </div>
          </div>
          <div className='col-xs-12 col-lg-6 sub-product'>
            <div className='row-fluid sub-product-top sub-apple-tv'>
              <ProductText header='Apple TV 4k' desc='The Apple Experience. Cinematic in every sense.' className='product-text' />
            </div>
            <div className='row-fluid sub-product-bottom sub-apple-tv'>
              <img src={require('./components/component-imgs/apple-tv-min.png')} alt='Apple TV products'></img>
            </div>            
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 sub-product'>
            <div className='row-fluid sub-product-top sub-watch-ultra'>
              <ProductText header='Watch Ultra' desc='Adventure Awaits.' className='product-text' />
            </div>
            <div className='row-fluid sub-product-bottom sub-watch-ultra-bottom sub-watch-ultra'>
              <img src={require('./components/component-imgs/watch-ultra-min.png')} alt='Apple Watch Ultra' id='watch-ultra-img'></img>
            </div>
          </div>
          <div className='col-xs-12 col-lg-6 sub-product'>
            <div className='row-fluid sub-product-top sub-watch-s8'>
              <ProductText header='Watch Series 8' desc='A healthy leap ahead.' className='product-text' />
            </div>
            <div className='row-fluid sub-product-bottom sub-watch-s8-bottom sub-watch-s8'>
              <img src={require('./components/component-imgs/watch-series-8-min.png')} alt='Apple Watch Series 8' id='watch-s8-img'></img>
            </div>            
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 sub-product'>
            <div className='row-fluid sub-product-top sub-apple-fitness'>
              <ProductText header='Fitness +' desc='Fitness for everyone. Now all you need is iPhone.' className='product-text' />
            </div>
            <div className='row-fluid sub-product-bottom sub-apple-fitness'>
              <img src={require('./components/component-imgs/fitness-plus-min.png')} alt='Apple Fitness Plus'></img>
            </div>
          </div>
          <div className='col-xs-12 col-lg-6 sub-product'>
            <div className='row-fluid sub-product-top sub-apple-card'>
              <ProductText header='Apple Card' desc='Get up to 3% daily cash back with every purchase.' className='product-text' />
            </div>
            <div className='row-fluid sub-product-bottom sub-apple-card'>
              <img src={require('./components/component-imgs/apple-card-min.png')} alt='Apple Card'></img>
            </div>            
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
