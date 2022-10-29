const MainProductText = ({ header, desc, className }) => {
  return (
    <div className={className}>
      <h2>{header}</h2>
      <p>{desc}</p>
      <div className='main-product-links'>
        <button><span>Learn More</span> &gt;</button>
        <button><span>Buy</span> &gt;</button>
      </div>
    </div>
  )
}

export default MainProductText