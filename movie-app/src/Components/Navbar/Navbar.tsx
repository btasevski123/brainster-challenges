import {Link} from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
    return(
        <>
         <Link to={`/`} className='navbar'>
                <h1>MUSIC DB</h1>
                <img src={`/images/raw/Girls-Listen-Music_0.jpg`} alt="Music DB" />
            </Link>
        </>
    )
}