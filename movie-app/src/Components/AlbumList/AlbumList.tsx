import { Link, useParams } from "react-router-dom";
import artists from "../../db";
import './AlbumList.css'

const getArtistById = (id: any) => {
  if (!id) {
    return undefined;
  }
  return artists.find((prod) => prod.id === +id);
};

export const AlbumList = () => {
  const { id } = useParams();
  const artist = getArtistById(id);

  return (
    <div className="Album-list">
      {artist?.albums.map((album) => (
        <div className="item" key={album.price}>
          <Link to={`${album.albumId}`} >
            <img
              src={`/images/albums/${album.cover}.jpg`}
              alt={`${artist?.name}`}
              className="w-100"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
