import logo from "../Images/logo.png"


function Header()
{
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>Portfolio</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href=""> Home</a></li>
                    <li><a href=""> Services</a></li>
                    <li><a href=""> Projects</a></li>
                    <li><a href=""> Testimonials</a></li>
                    <li><a href=""> Portfolio</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header