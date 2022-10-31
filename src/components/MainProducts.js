import ProductText from './ProductText'

const MainProducts = ({ productText }) => {
  return (
    <div>
      <div className='row main-product main-ipad'>
        <div className='col-xs-12 col-md-6 order-2 order-md-1 main-ipad-left'>
          <img src={require('./component-imgs/ipad-min.png')}
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
          <img src={require('./component-imgs/ipad-pro-min.png')}
          alt='iPad Pro' className='main-product-image'></img>
        </div>
      </div>

      <div className='row main-product main-iphone-14'>
        <div className='row-fluid main-iphone-14-top'>
          <ProductText header='iPhone 14 Pro' desc='Pro. Beyond.' className='product-text white-text' />
        </div>
        <div className='row-fluid main-iphone-14-bottom'>
          <img src={require('./component-imgs/iphone-14-pro-min.png')}
          alt='iPhone 14 Pro' className='main-product-image main-iphone-14-img'></img>
        </div>
      </div>
    </div>
  )
}

export default MainProducts