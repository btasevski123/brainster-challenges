import {nav} from '../../Types&Const/Const'
export const Navbar = () => {
    return (
        <div className='links'>
            <ul>
        {nav.map((item, id) => (
            <li key={item + id}>{item}</li>
        ))}
        </ul>
        </div>
    )
}