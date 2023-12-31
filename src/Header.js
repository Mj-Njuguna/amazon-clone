import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MyImage from './img/final_logo.png';

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
        if (user) {
          auth.signOut();
        }
  }
  return (
    <div className='header'>
      <Link to = "/">
        <img 
          className = 'header__logo'
        src = {MyImage} alt=''
        />
      </Link>   
         <div
         className='header__search'>
              <input
              className='header__searchInput' type='text'/>
              <SearchIcon
              className = 'header__searchIcon'/>
              {/*logo*/}
         </div>
            <div className='header__nav'>
                <Link to ={!user && '/login'}>
                <div onClick={handleAuthentication} className = 'header__option'>
                    <span
                    className='header__optionLineOne'>
                    Hello {user?.email || "Guest"}</span>
                     <span
                    className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className = 'header__option'>
                    <span
                    className='header__optionLineOne'>Returns</span>
                     <span
                    className='header__optionLineTwo'>Order</span>
                </div>
                <div className = 'header__option'>
                <span
                    className='header__optionLineOne'>Your</span>
                     <span
                    className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to = "/checkout">
                  <div className='header__optionBasket'>
                    <ShoppingBasketIcon/>
                    {/*  / / "?"" optional chaining = gracefuly terminate incase of errors*/}
                    <span className='header__optionLineTwo 
                  header__basketCount'>{basket?.length}</span>  
                  </div>
                </Link>    {/*NOTE: the diff btn lowercase link and Link  */}
            </div>
    </div>
  )
}

export default Header
