import React, {Component} from 'react';
import ruletaSonido from '../audio/winner.mp3'
import win from '../images/win.png';
import cupon from '../images/cupon.svg';
import { Link } from 'react-router-dom';

class Winner extends Component {
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
        <div className="winner"> 
          <h1>¡Felicidades Ganaste!</h1>
          <img src={cupon} className="cupon" alt="img-win"></img>
          <img src={win} className="miniwinner" alt="img-win"></img>
        </div>
        <Link to="/" >
        <button className="restart-game">Volver a Jugar </button>
        </Link>
     </>
    );
};
}  
export default Winner;

// const Winner = () => {
//   return(
//     <>
//       <div className="winner"> 
//         <h1>¡Felicidades Ganaste!</h1>
//         <img src={cupon} className="cupon" alt="img-win"></img>
//         <img src={win} className="miniwinner" alt="img-win"></img>
//       </div>
//       <Link to="/" >
//       <button className="restart-game">Volver a Jugar </button>
//       </Link>
//    </>
//   );
// };
// export default Winner;
