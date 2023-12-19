import { Link } from "react-router-dom";
import '../assets/css/nav.css'
function Nav() {
    return (

        <nav class="navbar">
            <h1 className="logo">CONTINENTAL EVENT</h1>
            <ul className="navlinks">
                <li><Link to='/'> HOME </Link></li>
                <li><Link to='/login'> LOGIN </Link></li>
                <li><Link to='https://www.royalenfield.com/in/en/our-world/media/events/events/'> EVENTS </Link></li>
                <li><Link to='https://www.royalenfield.com/in/en/support/'> SUPPORT </Link></li>
                <li><Link to='/login'> ABOUT </Link></li>

            </ul>

            
        </nav>
    )

}
export default Nav;