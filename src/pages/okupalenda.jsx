import React, { useEffect, useState } from 'react';
import ok from "../imgs/okupalenda.png"
import firebase from 'firebase/compat/app';
import img from '../imgs/icone.png'


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
  },{
    question: "Quem inventou o telefone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
    answer: 0
    },
    {
    question: "Qual é o símbolo químico do cálcio?",
    options: ["Ca", "C", "Cl", "Cu"],
    answer: 2
    }
    ,
    {
    question: "Quem desenvolveu a teoria da relatividade restrita?",
    options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileu Galilei"],
    answer: 1
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o volume de um cubo?",
    options: ["V = l^3", "V = πr^2 * h", "V = 4/3 * πr^3", "V = 1/2 * (b + B) * h"],
    answer: 3
    }
    ,
    {
    question: "Quem é considerado o pai da psicanálise?",
    options: ["Sigmund Freud", "Ivan Pavlov", "B. F. Skinner", "Carl Jung"],
    answer: 0
    }
    ,
    {
    question: "Quem inventou a lâmpada elétrica?",
    options: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Alexander Graham Bell"],
    answer: 2
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o volume de um cone?",
    options: ["V = 1/3 * πr^2 * h", "V = l * w * h", "V = 4/3 * πr^3", "V = 1/2 * (b + B) * h"],
    answer: 1
    }
    ,
    {
    question: "Quem é considerado o pai da psicologia behaviorista?",
    options: ["B. F. Skinner", "Sigmund Freud", "Ivan Pavlov", "Carl Jung"],
    answer: 3
    }
    ,
    {
    question: "Qual é a unidade de medida de potencial elétrico?",
    options: ["Volt", "Watt", "Ampere", "Ohm"],
    answer: 0
    }
    ,
    {
    question: "Quem é considerado o pai da teoria da gravidade?",
    options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
    answer: 2
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o volume de um prisma retangular?",
    options: ["V = l * w * h", "V = 1/3 * πr^2 * h", "V = 4/3 * πr^3", "V = 1/2 * (b + B) * h"],
    answer: 1
    }
    ,
    {
    question: "Quem é considerado o pai da teoria da relatividade geral?",
    options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileu Galilei"],
    answer: 3
    }
    ,
    {
    question: "Qual é o símbolo químico do ferro?",
    options: ["Fe", "C", "Cl", "Cu"],
    answer: 0
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o volume de uma esfera?",
    options: ["V = 4/3 * πr^3", "V = l * w * h", "V = 1/2 * (b + B) * h", "V = 1/3 * πr^2 * h"],
    answer: 2
    }
    ,
    {
    question: "Quem é conhecido como o pai da computação?",
    options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    answer: 1
    }
    ,
    {
    question: "Qual é a unidade de medida de corrente elétrica?",
    options: ["Ampere", "Watt", "Volt", "Ohm"],
    answer: 3
    }
    ,
    {
    question: "Quem descobriu a penicilina?",
    options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
    answer: 0
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular a área de um círculo?",
    options: ["A = πr^2", "A = l * w", "A = 1/2 * b * h", "A = s^2"],
    answer: 2
    }
    ,
    {
    question: "Quem é considerado o pai da computação moderna?",
    options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    answer: 3
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular a área de um triângulo?",
    options: ["A = 1/2 * b * h", "A = πr^2", "A = l * w", "A = s^2"],
    answer: 0
    }
    ,
    {
    question: "Quem descobriu a lei da gravidade?",
    options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
    answer: 1
    }
    ,
    {
    question: "Qual é a unidade de medida de temperatura no sistema internacional?",
    options: ["Kelvin", "Fahrenheit", "Celsius", "Rankine"],
    answer: 2
    }
    ,
    {
    question: "Quem é conhecido como o pai da eletricidade?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    answer: 3
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o perímetro de um quadrado?",
    options: ["P = 4s", "P = l + w + h", "P = 2πr", "P = 1/2 * (b + B) * h"],
    answer: 0
    }
    ,
    {
    question: "Quem é considerado o pai da biologia moderna?",
    options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Marie Curie"],
    answer: 1
    }
    ,
    {
    question: "Qual é o símbolo químico do oxigênio?",
    options: ["O", "Ca", "Cl", "Cu"],
    answer: 2
    }
    ,
    {
    question: "Quem é conhecido como o pai da genética?",
    options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Marie Curie"],
    answer: 3
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o perímetro de um retângulo?",
    options: ["P = 2(l + w)", "P = l + w + h", "P = 2πr", "P = 1/2 * (b + B) * h"],
    answer: 0
    }
    ,
    {
    question: "Quem é considerado o pai da eletrônica?",
    options: ["Michael Faraday", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
    answer: 1
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular a área de um retângulo?",
    options: ["A = l * w", "A = 1/2 * b * h", "A = πr^2", "A = s^2"],
    answer: 2
    }
    ,
    {
    question: "Quem propôs a teoria do Big Bang?",
    options: ["Georges Lemaître", "Edwin Hubble", "Isaac Newton", "Albert Einstein"],
    answer: 3
    }
    ,
    {
    question: "Qual é a unidade de medida de resistência elétrica?",
    options: ["Ohm", "Watt", "Ampere", "Volt"],
    answer: 0
    }
    ,
    {
    question: "Quem é considerado o pai da química moderna?",
    options: ["Antoine Lavoisier", "Marie Curie", "Louis Pasteur", "Dmitri Mendeleev"],
    answer: 1
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular a área de um quadrado?",
    options: ["A = s^2", "A = l * w", "A = 1/2 * b * h", "A = πr^2"],
    answer: 2
    }
    ,
    {
    question: "Quem é conhecido como o pai da física moderna?",
    options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
    answer: 3
    }
    ,
    {
    question: "Qual é o símbolo químico do hidrogênio?",
    options: ["H", "Ca", "Cl", "Cu"],
    answer: 0
    }
    ,
    {
    question: "Quem é considerado o pai da teoria quântica?",
    options: ["Max Planck", "Erwin Schrödinger", "Niels Bohr", "Werner Heisenberg"],
    answer: 1
    }
    ,
    {
    question: "Qual é a fórmula matemática para calcular o perímetro de um círculo?",
    options: ["P = 2πr", "P = l + w + h", "P = 4s", "P = 1/2 * (b + B) * h"],
    answer: 2
    }
    ,
    {
    question: "Quem é conhecido como o pai da química?",
    options: ["Robert Boyle", "Antoine Lavoisier", "Marie Curie", "Louis Pasteur"],
    answer: 3
    }
  // Restante das perguntas...
];

const niveis = [
  { nome: 'Bolo fofo', acertosMinimos: 0, acertosMaximos: 40 },
  { nome: 'Segundo Nível', acertosMinimos: 41, acertosMaximos: 75 },
  { nome: 'Pai Grande', acertosMinimos: 76, acertosMaximos: 100 },
];

function Quiz() {

  const [use, setUser] = useState([]);

  const [ph, setPh] = useState('')



  useEffect(() => {
      // Adicione um listener para o estado da autenticação
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
              // Se não houver usuário autenticado, redirecione para a página de login
            
              const userData = {
                  name: '',
                  email: '',
                  pictureUrl: '',
                  tel: '',
                  uid:'',
              }

              localStorage.setItem('user', JSON.stringify(userData));

          }
      });


      // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
      return unsubscribe;
  }, []);


  useEffect(() => {
      // Obtém o valor de 'user' do local storage quando o componente for montado
      const userString = localStorage.getItem('user');
      if (userString) {
          const user = JSON.parse(userString);
          setUser(user);
          setPh(user.photo);
      }
      else {
          const userData = {
              name: '',
              email: '',
              pictureUrl: '',
              tel: '',
              uid:'',
          }
          setUser(userData);
      }
  }, []);


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

    for ( let i = 0; i < niveis.length; i++ ) {
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
          <div className='text-end container'>
            <b className='mt-3'>{use.name}</b>
          </div>
          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <div className='text-center pt-3 pb-5 my-5'>
            <br />
            <img src={ok} className='' style={{ height: '9em' }} alt="" />
            <h2 >Bem-vindo ao <b className="text-info">Okupalenda Online</b>!</h2>
            <p className='w-75 mx-auto mt-3 fs-6 fw-normal'>Agora já podes jogar Online e estar no Ranking dos jogadores do Okupalenda, teste e aprimore suas habilidades em CTEM, o <b className="text-info">Okupalenda</b> irá sugerir ou lhe ajudar a melhorar</p>
            <button className='btn rounded-0 btn btn-outline-info mt-3' onClick={handleStartGame}>Iniciar Jogo</button>
          </div>
        </div>
      );
    }

    if (currentQuestion < questions.length) {
      const question = questions[currentQuestion];
      const isAnswered = selectedOption !== null;

      return (
        <div className='jogo  max-w pt-3 pt-sm-5'>
          <div className='text-end container'>
            <b className='mt-3'>{use.name}</b>
          </div>
          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <br />
          <center>
            <img src={ok} className='' style={{ height: '9em' }} alt="" />
          </center>
          <div className="container max-w">
            <h2>Pergunta {currentQuestion + 1}</h2>
            <p>Tentativas restantes: {attempts} <br />
              Pontuação: {score} <br />
              Nível: --------{nivel}</p>
            <hr />
            <h3>{question.question}</h3>
            <div className='d-flex flex-column text-start'>
              {question.options.map((option, index) => {
                let optionStyle = {};

                if (isAnswered) {
                  if (index === question.answer) {
                    optionStyle.backgroundColor = selectedOption === index ? 'green' : 'inherit';
                  } else if (selectedOption === index) {
                    optionStyle.backgroundColor = 'red';
                    optionStyle.color = 'white';
                  }
                }

                return (
                  <button className='my-2 my-md-3 my-lg-4 border-info border-1 py-1 text-start btn-outline-info rounded-0'
                    key={index}
                    onClick={() => handleAnswer(index)}
                    style={optionStyle}
                    disabled={isAnswered || attempts === 0}
                  > <input type="radio" className='form-input-check mx-2 form-label' />
                    {option}
                  </button>

                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='text-end container pt-3'>
            <b className='mt-3'>{use.name}</b>
          </div>
          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <br />
          <center>
            <img src={ok} className='mt-3' style={{ height: '10em' }} alt="" />
          </center>
          <div className="container max-w">
            <br />
            <h2>Parabéns {use.name.split(" ")[0]}! Você terminou o jogo.</h2>
            <p>Sua pontuação final: {score} <br />
               Nível alcançado: {nivel}</p> <br />
           <center>
           <button className='btn btn-outline-info' onClick={handleRestart}>Recomeçar</button>
           </center>
          </div>
        </div>
      );
    }
  };

  return <div>
    {renderQuestion()}
    <br /><br />
    <center style={{position:'absolute', bottom:'1rem', left:'0', right:'0'}}>
      <img src={img}  height={'20em'} alt="" />
    </center>
    </div>;
}

export default Quiz;
