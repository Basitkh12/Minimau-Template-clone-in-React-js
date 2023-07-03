import React from "react";
import Slider from "react-slick";
import { Zoom } from "react-awesome-reveal";
import Data from "../Carouseldata";


function Carousel()
{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        <div className="Carousel">

        <div className="Names">
            <Zoom>  
            <h1>Recent <span>Projects</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
            </Zoom>
        </div>
        
        <div className="Carouselss">
        <Slider {...settings}>
           {Data.map(t=>{
            return <div className="project">
            <img className="Image" src={t.img} alt="" />
            <div className="desc">
            <h1>{t.h}</h1>
            <p>{t.p}</p>
            </div>
            </div>
           })}
        </Slider>
        </div>
        </div>
      )
      
      
}

export default Carousel