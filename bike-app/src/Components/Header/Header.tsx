import '../Header/Header.css'
import { Logo } from './HeaderComponents/Logo'
import { Navbar } from './HeaderComponents/NavBar'
import { Badges } from './HeaderComponents/Badges'
export const Header = () => {
    return (
        <>
        <nav>
        <Logo />
        <Navbar />
        <Badges />
        </nav>
        </>
    )
}