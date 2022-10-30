const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <img src={require('./component-imgs/apple-logo.png')} className='nav-apple-logo' alt='apple logo'></img>
      <div className="container nav-container">
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="n_bar">
            <ul className="navbar-nav">
                <li className="nav-item active"><button className="nav-link">Store</button></li>
                <li className="nav-item"><button className="nav-link">Mac</button></li>
                <li className="nav-item"><button className="nav-link">iPad</button></li>
                <li className="nav-item"><button className="nav-link">iPhone</button></li>
                <li className="nav-item"><button className="nav-link">Watch</button></li>
                <li className="nav-item"><button className="nav-link">Airpods</button></li>
                <li className="nav-item"><button className="nav-link">TV & Home</button></li>
                <li className="nav-item"><button className="nav-link">Only on Apple</button></li>
                <li className="nav-item"><button className="nav-link">Accessories</button></li>
                <li className="nav-item"><button className="nav-link">Support</button></li>
            </ul>
        </div>
      </div>
      <img src={require('./component-imgs/search-icon.png')} className='nav-search-icon' alt=''></img>
      <img src={require('./component-imgs/shopping-icon.png')} className='nav-shopping-icon' alt=''></img>
    </nav>
  )
}

export default Navbar