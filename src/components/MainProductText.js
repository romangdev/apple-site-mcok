const MainProductText = ({ header, desc }) => {
  return (
    <div className='main-product-text'>
      <h2>{header}</h2>
      <p>{desc}</p>
      <div className='main-product-links'>
        <button>Learn More </button>
        <button>Buy </button>
      </div>
    </div>
  )
}

export default MainProductText