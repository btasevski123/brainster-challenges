import { Link } from "react-router-dom"
import { Product } from "../Types/types"
import './ArtistList.css'


export const ArtistList = ({id, name, cover}: Product): JSX.Element => {
    return (
        <>
<div className="artist-card">
    <Link to={`artist/${id}`}>
        <img src={`images/covers/${cover}.jpg`} alt={name} />
       <div artist-title>
       <span>{name}</span>
       </div>
    </Link>
</div>
        </>
    )
}