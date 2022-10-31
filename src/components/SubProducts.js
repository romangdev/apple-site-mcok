import ProductText from './ProductText'

const SubProducts = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12 col-lg-6 sub-product'>
          <div className='row-fluid sub-product-top sub-iphone-14'>
            <ProductText header='iPhone 14' desc='Big and bigger.' className='product-text' />
          </div>
          <div className='row-fluid sub-product-bottom sub-iphone-14'>
            <img src={require('./component-imgs/iphone-14-min.png')} alt='iPhone 14'></img>
          </div>
        </div>
        <div className='col-xs-12 col-lg-6 sub-product'>
          <div className='row-fluid sub-product-top sub-apple-tv'>
            <ProductText header='Apple TV 4k' desc='The Apple Experience. Cinematic in every sense.' className='product-text' />
          </div>
          <div className='row-fluid sub-product-bottom sub-apple-tv'>
            <img src={require('./component-imgs/apple-tv-min.png')} alt='Apple TV products'></img>
          </div>            
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-lg-6 sub-product'>
          <div className='row-fluid sub-product-top sub-watch-ultra'>
            <ProductText header='Watch Ultra' desc='Adventure Awaits.' className='product-text' />
          </div>
          <div className='row-fluid sub-product-bottom sub-watch-ultra-bottom sub-watch-ultra'>
            <img src={require('./component-imgs/watch-ultra-min.png')} alt='Apple Watch Ultra' id='watch-ultra-img'></img>
          </div>
        </div>
        <div className='col-xs-12 col-lg-6 sub-product'>
          <div className='row-fluid sub-product-top sub-watch-s8'>
            <ProductText header='Watch Series 8' desc='A healthy leap ahead.' className='product-text' />
          </div>
          <div className='row-fluid sub-product-bottom sub-watch-s8-bottom sub-watch-s8'>
            <img src={require('./component-imgs/watch-series-8-min.png')} alt='Apple Watch Series 8' id='watch-s8-img'></img>
          </div>            
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-lg-6 sub-product'>
          <div className='row-fluid sub-product-top sub-apple-fitness'>
            <ProductText header='Fitness +' desc='Fitness for everyone. Now all you need is iPhone.' className='product-text' />
          </div>
          <div className='row-fluid sub-product-bottom sub-apple-fitness'>
            <img src={require('./component-imgs/fitness-plus-min.png')} alt='Apple Fitness Plus'></img>
          </div>
        </div>
        <div className='col-xs-12 col-lg-6 sub-product'>
          <div className='row-fluid sub-product-top sub-apple-card'>
            <ProductText header='Apple Card' desc='Get up to 3% daily cash back with every purchase.' className='product-text' />
          </div>
          <div className='row-fluid sub-product-bottom sub-apple-card'>
            <img src={require('./component-imgs/apple-card-min.png')} alt='Apple Card'></img>
          </div>            
        </div>
      </div>
    </div>
  )
}

export default SubProducts