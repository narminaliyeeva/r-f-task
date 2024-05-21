import React from 'react'
import './App.css'
import { IoIosArchive } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";
import { FaArchway } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";

function App() {
  return (
    <div>
     
      <div className="container">
        <div className="cards">
          <div className='card'>
            <div><p >< IoIosArchive  className='ikon'/></p></div>
            <div>
              <h4>CSS Templates</h4>
              <span>TemplateMo website is the best for you to explore and download free website templates.</span>
            </div>
          </div>
          <div className='card'>
            <div><p ><FaCloud className='ikon' /></p></div>
            <div>
              <h4>CSS Templates</h4>
              <span>TemplateMo website is the best for you to explore and download free website templates.</span>
            </div>
          </div>
          <div className='card'>
            <div><p ><FaChargingStation className='ikon' /></p></div>
            <div>
              <h3>CSS Templates</h3>
              <span>TemplateMo website is the best for you to explore and download free website templates.</span>
            </div>
          </div>
          <div className='card'>
            <div><p ><FaSuitcase className='ikon' /></p></div>
            <div>
              <h4>CSS Templates</h4>
              <span>TemplateMo website is the best for you to explore and download free website templates.</span>
            </div>
          </div>
          <div className='card'>
            <div><p ><FaArchway className='ikon' /></p></div>
            <div>
              <h4>CSS Templates</h4>
              <span>TemplateMo website is the best for you to explore and download free website templates.</span>
            </div>
          </div>
          <div className='card'>
            <div><p ><FaPuzzlePiece  className='ikon'/></p></div>
            <div>
              <h4>CSS Templates</h4>
              <span>TemplateMo website is the best for you to explore and download free website templates.</span>
            </div>
          </div>
        </div>
      </div>
      
        <div className="main">
          <div className="txt"><p className='black'>Business <span className='orng'>Solutions</span> and <br /> <span className='grn'>Crypto</span> Investments</p></div>
          <div className="btn">
            <button className='green'>Contact Us</button>
            <button className='orange'>Discover more</button>
          </div>
        </div>
      
    </div>
  )
}

export default App