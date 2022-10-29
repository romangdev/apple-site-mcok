const MainProductText = ({ header, desc, className }) => {
  return (
    <div className={className}>
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