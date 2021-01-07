import React, {Component} from 'react';
import ruletaSonido from '../audio/game-over.mp3'
import win from '../images/loser.png';
import { Link } from 'react-router-dom';

class Loser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      play: false,
    };
    this.url = ruletaSonido;
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount(){
    this.togglePlay();
  }

  togglePlay() {
    const play =!(this.state.play);
    console.log(this.audio);
    play ? this.audio.play() : this.audio.pause();
    this.setState({play});
  }

  render() {
    return(
        <>
          <div className="loser"> 
            <h1>¡Perdiste, gracias por jugar!</h1>
            <img src={win} className="miniloser" alt="img-win"></img>
          </div>
          <Link to="/" >
          <button className="restart-game">Volver a Jugar </button>
          </Link>
        </>
      );  
  };
}  
export default Loser;

// const Loser = () => {
//   return(
//     <>
//       <div className="loser"> 
//         <h1>¡Perdiste, gracias por jugar!</h1>
//         <img src={win} className="miniloser" alt="img-win"></img>
//       </div>
//       <Link to="/" >
//       <button className="restart-game">Volver a Jugar </button>
//       </Link>
//    </>
//   );
// };
// export default Loser;