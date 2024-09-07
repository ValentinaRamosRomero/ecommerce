import React, { useContext, useEffect } from 'react';
import "../Styles/SignIn.css";
import { MyContext } from '../App';
import logo from '../Images/logo.avif';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const SignIn = () => {

  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);

  return (
    <section className='section signInPage'>
      <div className='container p-5'>
        <div className=' box card p-3 shadow border-0'>
          <div className='logoWrapper1 text-center'>
            <img src={logo} />

          </div>

          <form className='mt-3'>
            <h2 className='mb-3'>Sign In</h2>
            <div className='form-group'>
              <TextField id="standard-basic" label="Email" type="email" required
                variant="standard" className='w-100' />
            </div>
            <div className='form-group'>
              <TextField id="standard-basic" label="Password" type="password" required
                variant="standard" className='w-100' />
            </div>

            <a className='border-effect'>¿Olvidaste la contraseña?</a>
            <div className='d-flex align-items-center mt-3 mb-3'>
              <Button className='btn-blue col btn-lg btn-big '>Ingresar</Button>
              <Link to="/">
                <Button className='btn-lg btn-big col ml-3' 
                variant="outlined" onClick={()=>context.setisHeaderFooterShow(true)}>
                  Cancelar</Button>
              </Link>
            </div>

            <p>¿Aún no estás registrado?
              <Link to="/signUp" className='border-effect'>Registrarse</Link>
            </p>
          </form>

        </div>
      </div>

    </section>
  )
}
