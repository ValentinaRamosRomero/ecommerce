import React, { useContext } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineUser } from "react-icons/hi2";
import { PiShoppingCartThin } from "react-icons/pi";
import { CountryDropDown } from './CountryDropDown';
import { SearchBox } from './SearchBox';
import { Navigation } from './Navigation';
import { MyContext } from '../App';


export const Header = () => {

  const context = useContext(MyContext)
  
  return (
    <>
      <div className='headerWrapper'>
        <div className='top-strip bg-purple'>
          <div className='container'>
            <p className='mb-0 mt-0 text'>
              Due to the covid epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>

        <div className='header'>
          <div className='container'>
            <div className='row'>
              <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to={'/'}><img src={logo} alt='logo' /></Link>
              </div>

              <div className='col-sm-10 d-flex align-items-center part2'>
                {
                  context.countryList.length!==0 && <CountryDropDown />
                }
                
                <SearchBox/>
                <div className='part3 d-flex align-items-center ml-auto'>
                  <button className='circle mr-3'><HiOutlineUser /></button>
                  <div className='ml-auto cartTab d-flex align-items-center'>
                    <span className='price'>$3.29</span>
                    <div className='position-relative ml-2'>
                      <button className='circle'><PiShoppingCartThin /></button>
                      <span className='count d-flex align-items-center justify-content-center'>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navigation/>
        

      </div>
    </>
  )
}
