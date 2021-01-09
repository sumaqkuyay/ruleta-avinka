import React from 'react';
// import TimerDown from '../components/CountDownTimer';
import marker from '../images/logoArtisan.png';
import fraseArtisan from '../images/frase-artisan.png'
import { Link } from 'react-router-dom';

const Questions = () =>{

	const urlactual = (window.location.hash).slice(22);

	console.log(urlactual);
	
    const questions = [

		{   category:"categoria1",
			questionText: 'Artisan es:',
			answerOptions: [
				{ answerText: 'A. Nueva línea de pavos', isCorrect: false },
				{ answerText: 'B. Nueva línea de pollos con crianza libre de antibióticos', isCorrect: true },
				{ answerText: 'C. Nueva línea de precocidos', isCorrect: false },
			],
		},
		{   category:"categoria2",
			questionText: 'La actriz del comercial de Artisan es:',
			answerOptions: [
				{ answerText: 'A. Karen Schwarz', isCorrect: false },
				{ answerText: 'B. Maria Pia Copello', isCorrect: false },
				{ answerText: 'C. Chiara Pinasco', isCorrect: true },
			],
		},
		{   category:"categoria3",
			questionText: 'Artisan viene con empaques:',
			answerOptions: [
				{ answerText: 'A. Simples', isCorrect: false },
				{ answerText: 'B. Con tecnología de atmosfera modificada', isCorrect: true },
				{ answerText: 'C. Cartón', isCorrect: false },
			],
		},
		{   category:"categoria4",
			questionText: 'Artisan se vende en:',
			answerOptions: [
				{ answerText: 'A. Supermercados', isCorrect: false },
				{ answerText: 'B. Tiendas Avinka', isCorrect: false },
				{ answerText: 'C. Delivery Avinka', isCorrect: false },
				{ answerText: 'D. Todas las anteriores', isCorrect: true },
			],
		},
		{   category:"categoria5",
			questionText: 'Artisan es una marca de:',
			answerOptions: [
				{ answerText: 'A. Avinka', isCorrect: true },
				{ answerText: 'B. Santa Elena', isCorrect: false },
				{ answerText: 'C. N/A', isCorrect: false },
			],
		},
	];
	let pregunta;

	for( let element of questions){
		if(element.category === urlactual ){
			pregunta=element;
		}
	}

	// const handleAnswerOptionClick=(condicion)=>{
	// 	if (condicion === true){
	// 		history.push(`/winner`);
	// 	}
	// }
	return (
        <>
		{/* <TimerDown/> */}
		<div className="fraseArtisan">
			<img src={fraseArtisan} alt="frase-artisan" />
		</div>
		<div className='app'>
			<div className='question-section'>
				<div className='question-text'><p>{pregunta.questionText}</p></div>
				<div className='question-count'>
					<img src={marker} className="artisan-logo" alt="marker" />
				</div>
			</div>
			<div className="texto-pregunta"><p>Seleciones una respuesta:</p></div>
			<div className='answer-section'>
				{pregunta.answerOptions.map((answerOption) => (
					<Link classname="gopage" to={answerOption.isCorrect? "/winner" : "/loser"}>
					<button >{answerOption.answerText}</button>
					</Link>
				))}
			</div>
		</div>
        </>
	);
};
export default Questions;