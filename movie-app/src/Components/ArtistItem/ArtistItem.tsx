import artists from '../../db'
import { ArtistList } from '../ArtistList/ArtistList'
import "./ArtistItem.css"


export const ArtisItem = () => {
    return (
        <>
        <div className='title'>
            <h1>Browse the artists</h1>
        </div>

        <div className="artistInner">
        {artists.map(({id, name, cover, bio, albums }) => (
                    <ArtistList
                        key={id}
                        id={id}
                        name={name}
                        cover={cover}
                        bio={bio}
                        albums={albums}
                    />
                ))}
        </div>

        </>
    )
}