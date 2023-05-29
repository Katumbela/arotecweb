import React, { useState } from 'react';
import ok from "../imgs/okupalenda.png"


const questions = [
  // Array de perguntas e respostas
  {
    question: "Qual é a capital do Angola?",
    options: ["Luanda", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: 0
  },
  {
    question: "Qual é o maior país do mundo em área territorial?",
    options: ["Guiné", "Rússia", "China", "Estados Unidos"],
    answer: 1
  },
  // Restante das perguntas...
];

const niveis = [
  { nome: 'Bolo fofo', acertosMinimos: 0, acertosMaximos: 40 },
  { nome: 'Segundo Nível', acertosMinimos: 41, acertosMaximos: 75 },
  { nome: 'Pai Grande', acertosMinimos: 76, acertosMaximos: 100 },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [selectedOption, setSelectedOption] = useState(null);
  const [nivel, setNivel] = useState('');

  const handleStartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAttempts(3);
    setSelectedOption(null);
    setNivel('');
  };

  const handleAnswer = (selectedOption) => {
    const question = questions[currentQuestion];

    if (selectedOption === question.answer) {
      setScore(score + 1);
    } else {
      setAttempts(attempts - 1);
    }

    setSelectedOption(selectedOption);

    if (attempts === 1) {
      terminarJogo();
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 1000);
    }
  };

  const terminarJogo = () => {
    const porcentagemAcertos = (score / questions.length) * 100;

    for (let i = 0; i < niveis.length; i++) {
      if (
        porcentagemAcertos >= niveis[i].acertosMinimos &&
        porcentagemAcertos <= niveis[i].acertosMaximos
      ) {
        setNivel(niveis[i].nome);
        break;
      }
    }

    setCurrentQuestion(questions.length); // Encerra o jogo
  };

  const handleRestart = () => {
    handleStartGame();
  };

  const renderQuestion = () => {
    if (currentQuestion === -1) {
      return (
        <div>
          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <div className='text-center py-5 my-5'>
            <img src={ok} className='w-75' alt="" />
            <h2 >Bem-vindo ao <b className="text-info">Okupalenda Online</b>!</h2>
            <p className='w-75 mx-auto mt-3'>Agora já podes jogar Online e estar no Ranking dos jogadores do Okupalenda, teste e aprimore suas habilidades em CTEM, o <b className="text-info">Okupalenda</b> irá sugerir ou lhe ajudar a melhorar</p>
            <button className='btn btn btn-outline-info rounded-3 mt-3' onClick={handleStartGame}>Iniciar Jogo</button>
          </div>
        </div>
      );
    }

    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      const isAnswered = selectedOption !== null;

      return (
        <div>
          <h2>Pergunta {currentQuestion + 1}</h2>
          <p>Tentativas restantes: {attempts}</p>
          <p>Pontuação: {score}</p>
          <p>Nível: {nivel}</p>
          <h3>{question.question}</h3>
          <div>
            {question.options.map((option, index) => {
              let optionStyle = {};

              if (isAnswered) {
                if (index === question.answer) {
                  optionStyle.backgroundColor = selectedOption === index ? 'green' : 'inherit';
                } else if (selectedOption === index) {
                  optionStyle.backgroundColor = 'red';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  style={optionStyle}
                  disabled={isAnswered || attempts === 0}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Parabéns! Você terminou o jogo.</h2>
          <p>Sua pontuação final: {score}</p>
          <p>Nível alcançado: {nivel}</p>
          <button onClick={handleRestart}>Reiniciar</button>
        </div>
      );
    }
  };

  return <div>{renderQuestion()}</div>;
}

export default Quiz;
