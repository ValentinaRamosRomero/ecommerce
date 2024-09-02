import React, { useState } from 'react';
import "../Styles/Listing.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);

    return (
        <>
        <div className='sidebar'>
            <div className='filterBox'>
                <h6>Categorías de Productos</h6>

                <div className='scroll'>
                    <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Frutas y Verduras" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Bebidas y pasabocas" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Dulces y chocolatería" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Lacteos y refrigerados" />
                        </li>

                    </ul>

                </div>
            </div>

            <div className='filterBox'>
                <h6>Filtrar por precio</h6>
                <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />
            
                <div className='d-flex pt-2 pb-2 priceRange'>
                    <span>
                        From:<strong className='text-success'>Rs: {value[0]}</strong>
                    </span>
                    <span>
                        From:<strong className='ml-auto'>Rs: {value[1]}</strong>
                    </span>
                </div>
            </div>

            <div className='scroll'>
                    <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox />} label="En Stock" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="En venta" />
                        </li>
                    </ul>

                </div>
        </div></>
        
    )
}
