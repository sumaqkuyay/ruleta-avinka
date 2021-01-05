import React, {Component} from 'react';
import Header from '../components/Header';
import spiner from '../images/RULETA.svg';
import marker from '../images/marker.png';
import button from '../images/Button.svg';

class Roulette extends Component{
  constructor(props) {
    super(props);
    this.state = {
      grados:0,
      categoria:0,
      duration:5000,
    };
  }
  start =()=>{
    let rangos = new Map();
    rangos.set("categoria1",0);
    rangos.set("categoria2",68);
    rangos.set("categoria3",140);
    rangos.set("categoria4",214);
    rangos.set("categoria5",280);
    const grados= Math.floor(Math.random()*5000)+5000
    let styleSheet = document.styleSheets[0];
    let keyframes = `@keyframes spin${grados} {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(${grados}deg);
      }
    }`;
    // console.log(rangos);
    styleSheet.insertRule(keyframes,styleSheet.cssRules.length);
    let result;
    // this.rangos.forEach((key,value) => {
    //   result= (grados>value ? key: result)
    // })
    for(let [key,value] of rangos ){
      result= (grados%360>value ? key: result)
    };
    console.log(`${grados%360}:${result}`);
      // console.log(result);
    this.setState({
      grados:grados,
      categoria:result,
    })
    setTimeout(()=>this.nextste(result),this.state.duration+500);
  }
  nextste = (next)=> {
    this.props.history.push(`/questions?categoria=${next}`);
  };

 
 render() {
  const {grados,duration}= this.state;

    let style = {"transform": `rotate(0deg)`,
    "animation-name": `spin${grados}`,
    "animation-duration": `${duration}ms`,
    "animationFillMode":'forwards'} 

    return(
      <>
      <div className="bodyRoulette">
      <Header />
        <img src={marker} className="marker" alt="marker" />
        <img src={spiner} className="element" style={style} grados={grados} alt="img-win"></img>
        <img src={button} className="button" alt="boton" onClick={this.start}/>
        {/* <button className="button" onClick={this.start}>gira</button> */}
      </div>
      </>
    );
  }
};
export default Roulette;



  // const [grados, setgrados] = useState(0);
  
  // rangos= {
  //   zona1: 50,
  //   zona2: 100,
  //   zona3: 150,
  //   zona4: 200,
  //   zona5: 360,
  // }