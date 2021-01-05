import React from 'react';
// import TimerDown from '../components/CountDownTimer';
import marker from '../images/logoArtisan.png';
import { Link } from 'react-router-dom';

const Questions = () =>{

	const urlactual = (window.location.hash).slice(22);

	console.log(urlactual);
	
    const questions = [

		{   category:"categoria1",
			questionText: 'Artisan es: ________________',
			answerOptions: [
				{ answerText: 'Nueva línea de pavos', isCorrect: false },
				{ answerText: 'Nueva línea de pollos con crianza libre de antibióticos', isCorrect: true },
				{ answerText: 'Nueva línea de precocidos', isCorrect: false },
			],
		},
		{   category:"categoria2",
			questionText: 'La actriz del comercial de Artisan es:______________',
			answerOptions: [
				{ answerText: 'Karen Schwarz', isCorrect: false },
				{ answerText: 'Maria Pia Copello', isCorrect: false },
				{ answerText: 'Chiara Pinasco', isCorrect: true },
			],
		},
		{   category:"categoria3",
			questionText: 'Artisan viene con empaques:',
			answerOptions: [
				{ answerText: 'Simples', isCorrect: false },
				{ answerText: 'Con tecnología de atmosfera modificada', isCorrect: true },
				{ answerText: 'Cartón', isCorrect: false },
			],
		},
		{   category:"categoria4",
			questionText: 'Artisan se vende en:',
			answerOptions: [
				{ answerText: 'Supermercados', isCorrect: false },
				{ answerText: 'Tiendas Avinka', isCorrect: false },
				{ answerText: 'Delivery Avinka', isCorrect: false },
				{ answerText: 'Todas las anteriores', isCorrect: true },
			],
		},
		{   category:"categoria5",
			questionText: 'Artisan se una marca de:',
			answerOptions: [
				{ answerText: 'Avinka', isCorrect: true },
				{ answerText: 'Santa Elena', isCorrect: false },
				{ answerText: 'N/A', isCorrect: false },
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
    
		<div className='app'>
			<div className='question-section'>
				<div className='question-text'>{pregunta.questionText}</div>
				<div className='question-count'>
					<img src={marker} className="artisan-logo" alt="marker" />
				</div>
			</div>
			<div className='answer-section'>
				{pregunta.answerOptions.map((answerOption) => (
					<Link to={answerOption.isCorrect? "/winner" : "/loser"}>
					<button >{answerOption.answerText}</button>
					</Link>
				))}
			</div>
		</div>
        </>
	);
};
export default Questions;