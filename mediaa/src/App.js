import logo from './logo.svg';
import './App.css';
import abhi from "./images/nag.avif"
import ring from "./audio/gg.mp3"
import vid from "./video/vid"

function App() {
  return (
    <div className="App">
      <img src='https://m.media-amazon.com/images/M/MV5BYmYyYzZkZTEtOGNjYy00ZWUyLWFiYzYtYjViMzU1ZDk4ODhiXkEyXkFqcGdeQXVyNzI4NjYyMzk@._V1_.jpg'  ></img>
     <img   src='./images/dev.jpg' ></img>
     <img src={abhi}  ></img>
     <hr></hr>
     <audio src='https://services.brninfotech.com/tws/media2/songs/DearComrade/01 - Nee Neeli Kannullona.mp3'controls></audio>
     <audio src='./audios/gg.mp3'controls autoplay muted></audio>
     <audio src={ring} controls ></audio>
     <hr></hr>
     <video  src='https://services.brninfotech.com/tws/media2/trailers/Game Over.mp4' controls muted></video>
     <video src='./video/vid' controls autoplay></video>
     <video src={vid} controls muted></video>
    </div>
  );
}

export default App;
