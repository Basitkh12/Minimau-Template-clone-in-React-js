import React from "react";
import Slider from "react-slick";
import { testi } from "../Text";
import { Slide } from "react-awesome-reveal";

function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="Testimonials">
            <div className="Heading">
                <Slide direction="left">
                <h6>TESTIMONIALS</h6>
                <h1>What Clients Say</h1>
                </Slide>
                <div className="Carousell">
                    <Slider {...settings}>
                        <div>
                            {testi.map(t=>{
                                return (
                                <div  className="howMyq">
                                <div class="sc-ftvSup lntBMh">
                                    {t.quote}
                                   <span className="star">
                                    {t.star} {t.star} {t.star}
                                   </span>
                                </div>
                                <p class="sc-papXJ NGXCz">{t.para}</p>
              <div class="sc-jqUVSM eoaEdi">
                  <img src={t.img} alt="John Michel"/>
                  <div class="details">
                      <h1>{t.h1}</h1>
                      <p>{t.p2}</p>
                      </div>
                      </div>
                      </div>
                      )
                        })}   
                        </div>
                        <div>
                        {testi.map(t=>{
                                return (
                                <div  className="howMyq">
                                <div class="sc-ftvSup lntBMh">
                                    {t.quote}
                                   <span className="star">
                                    {t.star} {t.star} {t.star}
                                   </span>
                                </div>
                                <p class="sc-papXJ NGXCz">{t.para}</p>
              <div class="sc-jqUVSM eoaEdi">
                  <img src={t.img} alt="John Michel"/>
                  <div class="details">
                      <h1>{t.h1}</h1>
                      <p>{t.p2}</p>
                      </div>
                      </div>
                      </div>
                      )
                        })} 
                        </div>

                        <div>
                        {testi.map(t=>{
                                return (
                                <div  className="howMyq">
                                <div class="sc-ftvSup lntBMh">
                                    {t.quote}
                                   <span className="star">
                                    {t.star} {t.star} {t.star}
                                   </span>
                                </div>
                                <p class="sc-papXJ NGXCz">{t.para}</p>
              <div class="sc-jqUVSM eoaEdi">
                  <img src={t.img} alt="John Michel"/>
                  <div class="details">
                      <h1>{t.h1}</h1>
                      <p>{t.p2}</p>
                      </div>
                      </div>
                      </div>
                      )
                        })} 
                        </div>

                        <div>
                        {testi.map(t=>{
                                return (
                                <div  className="howMyq">
                                <div class="sc-ftvSup lntBMh">
                                    {t.quote}
                                   <span className="star">
                                    {t.star} {t.star} {t.star}
                                   </span>
                                </div>
                                <p class="sc-papXJ NGXCz">{t.para}</p>
              <div class="sc-jqUVSM eoaEdi">
                  <img src={t.img} alt="John Michel"/>
                  <div class="details">
                      <h1>{t.h1}</h1>
                      <p>{t.p2}</p>
                      </div>
                      </div>
                      </div>
                      )
                        })} 
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Testimonials
