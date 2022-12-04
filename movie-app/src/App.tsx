
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { ArtisItem } from './Components/ArtistItem/ArtistItem';
import { ArtistPage } from './Components/ArtistPage/ArtistPage';
import { AlbumPage } from './Components/AlbumPage/AlbumPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <div className='Wrapper'>
   <Routes>
    <Route path='/' element={<ArtisItem />} />
    <Route path='/artist/:id' element={<ArtistPage />} />
    <Route path="/artist/:id/:albumId" element={<AlbumPage />} />
   </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
