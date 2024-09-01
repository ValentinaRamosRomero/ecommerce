import React, { useContext, useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { Button, Dialog } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from '../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CountryDropDown = () => {

  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, setcountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country)
  }

  useEffect(() => {
    setcountryList(context.countryList);
  }, [])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  }


  return (
    <>
      <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
        <div className='info d-flex flex-column'>
          <span className='label'>Tu Ubicación</span>
          <span className='name'>{context.selectedCountry !== "" ? context
          .selectedCountry.length > 10 ? context.selectedCountry?.substr(0,10) :
          context.selectedCountry : 'Select Location'}</span>
        </div>
        <span className='ml-auto'><FaAngleDown /></span>
      </Button>

      <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className='locationModal'
        TransitionComponent={Transition}>
        <h4 className='mb-0'>Escoge tu lugar de entrega</h4>
        <p>Ingresa tu dirección y te especificaremos la oferta para tu área</p>
        <Button className='close_' onClick={() => setisOpenModal(false)}><IoClose /></Button>

        <div className='headerSearch W-100'>
          <input type='text' placeholder='Buscar tu área' onChange={filterList} />
          <Button><IoSearch /></Button>
        </div>

        <ul className='countryList mt-3'>

          {
            countryList?.length !== 0 && countryList?.map((item, index) => {
              return (
                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                  className={`${selectedTab === index ? 'active' : ''}`}
                >{item.country}</Button>
                </li>
              )
            })
          }

        </ul>


      </Dialog>



    </>
  )
}
