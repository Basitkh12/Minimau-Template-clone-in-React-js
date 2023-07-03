import { Slide } from "react-awesome-reveal"
import Text from "../Text"

function Services()
{

    return (
        <div className="Services-container">
            <div className="services">
            <Slide direction="down">
       <h4>My <span> Services</span></h4>
       <h1>What I Do</h1>
       </Slide>
       <div className="cards-container">
        <Slide direction="left">
       <div className="Cards">
        <div className="Data">
            <img src={Text[0].imageurl} alt="" />
            <h1>{Text[0].heading}</h1>
            <p>{Text[0].para}</p>
        </div>
       </div>
       </Slide>
       <Slide direction="up">
       <div className="Cards">
        <div className="Data">
        <img src={Text[1].imageurl} alt="" />
            <h1>{Text[1].heading}</h1>
            <p>{Text[1].para}</p>
        </div>
       </div></Slide>
       <Slide direction="right">
       <div className="Cards">
        <div className="Data">
            <img src={Text[2].imageurl} alt="" />
            <h1>{Text[2].heading}</h1>
            <p>{Text[2].para}</p>
        </div>
       </div>
       </Slide>
     
        </div>

       </div>
       </div>

    )

}

export default Services