import introimg from "../Images/introimg.png"
import { Fade, Slide } from "react-awesome-reveal";


function Intro()
{
    return(
            <div className="Intro">
              <div className="Desc">
                <Slide>
              <h3>Hello <span>I'am</span></h3>
              <h1>Milad Amiri</h1>
              <h2>UX/UI Designer And Graphic Designer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto. Adipisci in qui officia provident tenetur sequi, deserunt corporis quos?</p>
              <button>Let's talk</button>
              <div className="Check">
                <h1>Check out my</h1>
                <div className="link">
                    <span><a href=""><i class="fa-brands fa-instagram"></i></a></span>
                    <span><a href=""><i class="fa-brands fa-facebook"></i></a></span>
                    <span><a href=""><i class="fa-brands fa-linkedin"></i></a></span>   
                </div>
              </div>
              </Slide>
                </div> 
                <Slide direction="right">
                <div className="image">
                    
                    <img src={introimg} alt="" />
                    
                    </div>
                    </Slide> 
            </div>
    )
}
export default Intro