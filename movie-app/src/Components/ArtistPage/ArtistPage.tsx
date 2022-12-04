import {useParams} from "react-router-dom"
import { AlbumList } from "../AlbumList/AlbumList"
import artists from "../../db"
import './ArtistPage.css'

const getCardById = (id: any) => {
    return artists.find((artist) => artist.id === +id)
} 

export const ArtistPage = () => {
    const { id } = useParams()
    const artist = getCardById(id)
   return(
    <>
    <div className="artist-page-inner">
           <div className=" artist-page" >
               <img src={`/images/covers/${artist?.cover}.jpg`} alt={`${artist?.name}`} className="artist-img"/>
               <h3>{artist?.name}</h3>
               <p>{artist?.bio}</p>
              <AlbumList />
           </div>
       </div>
    </>
   )
}