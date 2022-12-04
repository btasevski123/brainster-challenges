import './AlbumPage.css'
import artists from "../../db"
import {useParams} from "react-router-dom"

const findAlbumById = (id: any) => {
    return artists.find((prod) => prod.id === +id);
  };
  
  const findAlbum = (albumId: any, artist: any) => {
    return artist.albums.find((album: any) => album.albumId === albumId);
  };
export const AlbumPage = () => {
    const { id, albumId } = useParams();
  const artist = findAlbumById(id);
  const album = findAlbum(albumId, artist);
    return(
        <div className="row">
        <div className="col-12 mt-2">
          <img
            src={`/images/albums/${album.cover}.jpg`}
            alt={album.title}
            className="album-image"
          />
        </div>
        <div className="col-12 d-flex ">
          <p className="fw-bold mx-1">Title:</p> <span>{album.title}</span>
        </div>
        <div className="col-12 d-flex ">
          <p className="fw-bold mx-1">Year:</p> <span>{album.year}</span>
        </div>
        <div className="col-12 d-flex ">
          <p className="fw-bold mx-1">Price:</p> <span>{album.price} $</span>
        </div>
      </div>
    )
}