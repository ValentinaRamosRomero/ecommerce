import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import "../Styles/Navigation.css";



export const Navigation = () => {

  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);


  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1">
              <div className="catWrapper">
                <Button className="allCatTab align-items-center" onClick=
                  {() => setisopenSidebarVal(!isopenSidebarVal)}>
                  <span className="icon1 mr-2"><LuMenu /></span>
                  <span className="text">CATEGORÍAS</span>
                  <span className="icon2 ml-2"><FaAngleDown /></span>
                </Button>

                <div className={`sidebarNav ${isopenSidebarVal === true ? "open" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/"><Button>Frutas y Verduras<FaAngleRight className="ml-auto" /></Button></Link>
                      <div className="submenu">
                        <Link to="/"><Button>clothing</Button></Link>
                        <Link to="/"><Button>footwear</Button></Link>
                        <Link to="/"><Button>watches</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/"><Button>Bebidas y Pasabocas</Button></Link>
                      <div className="submenu">
                        <Link to="/"><Button>clothing</Button></Link>
                        <Link to="/"><Button>footwear</Button></Link>
                        <Link to="/"><Button>watches</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/"><Button>Dulces y chocolatería</Button></Link>
                    </li>
                    <li>
                      <Link to="/"><Button>Lacteos y Refrigerados</Button></Link>
                    </li>
                    <li>
                      <Link to="/"><Button>Gift</Button></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item"><Link to="/">
                  <Button> Home</Button></Link></li>

                <li className="list-inline-item"><Link to="/">
                  <Button>Frutas y Verduras</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>footwear</Button></Link>
                    <Link to="/"><Button>watches</Button></Link>
                  </div>
                </li>

                <li className="list-inline-item"><Link to="/">
                  <Button>Bebidas y Pasabocas</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>footwear</Button></Link>
                    <Link to="/"><Button>watches</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item"><Link to="/">
                  <Button>Dulces y chocolatería</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>footwear</Button></Link>
                    <Link to="/"><Button>watches</Button></Link>
                  </div>
                </li>

                <li className="list-inline-item"><Link to="/">
                  <Button>Lacteos y Refrigerados</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>footwear</Button></Link>
                    <Link to="/"><Button>watches</Button></Link>
                  </div>
                </li>

                <li className="list-inline-item"><Link to="/">
                  <Button>Contact</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>footwear</Button></Link>
                    <Link to="/"><Button>watches</Button></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
