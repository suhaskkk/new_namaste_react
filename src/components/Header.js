import {HEAD_URL} from '../utils/constants'

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="log"
            src={HEAD_URL}
            alt="food logo"
            //   style={{width:'70px'}}
          />
        </div>
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
  