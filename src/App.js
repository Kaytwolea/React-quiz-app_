import { useState } from 'react'


function App() {
  // const [question, setQuestion] = useState([0])

  const questionData = [
      {
        Questions: 'Who is the President of Nigeria ?',
        Answerdata: [
            {Answer: 'Temiloluwa', isCorrect: false},
            {Answer: 'Samuel', isCorrect: false},
            {Answer: 'Buhari', isCorrect: true},
            {Answer: 'David', isCorrect: false}
          ]
      },
      {
        Questions: 'Who is the Founder of Microsoft ?',
        Answerdata: [
            {Answer: 'Bill Gates / Paul Allen', isCorrect: true},
            {Answer: 'Jeff Bezos', isCorrect: false},
            {Answer: 'Tom Cruise', isCorrect: false},
            {Answer: 'Kelvin Hart', isCorrect: false}
          ]
      },
      {
        Questions: 'Who is the CEO of Tesla ?',
        Answerdata: [
            {Answer: 'The Rock', isCorrect: false},
            {Answer: 'Elon Musk', isCorrect: true},
            {Answer: 'Roman Abrahimovic', isCorrect: false},
            {Answer: 'Undertaker', isCorrect: false}
          ]
      },
      {
        Questions: 'Who is the Football with the most balon d\'or ?',
        Answerdata: [
            {Answer: 'Cristiano Ronaldo', isCorrect: false},
            {Answer: 'Zinedine Zidane', isCorrect: false},
            {Answer: 'Lionel Messi', isCorrect: true},
            {Answer: 'Ronaldinho', isCorrect: false}
          ]
      },
      {
        Questions: 'Who is the current President of the USA ?',
        Answerdata: [
            {Answer: 'Barrack Obama', isCorrect: false},
            {Answer: 'Donald Trump', isCorrect: false},
            {Answer: 'Joe Biden', isCorrect: true},
            {Answer: 'Ruiz Washington', isCorrect: false}
          ]
      }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // const [isGreen, setIsGreen] =useState(false);
  // const [correctQuestion, setC0rrectQuestion]=useState(false)

  const handleOptionButton = (isCorrect) => {
    if(isCorrect===true) {
      setScore(score +1);
      // setIsGreen(true);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questionData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  }
  const[showScore, setShowScore] = useState(false);

  const handleReload = () => {
    setCurrentQuestion(0);
    setShowScore(false);
  }

  return (
    <div className='App'>
        <div className='md:w-3/4 w-full mainbox mx-auto h-auto bg-blue-900 md:mt-32 grid grid-col-span-2 md:grid-cols-2'>
           <div className="bg-transparent pt-12 pl-6 h-96">
               <h1 className="md:text-4xl md:text-left text-center text-xl font-bold text-white">Question {currentQuestion +1} / {questionData.length}</h1>
              <p className='text-3xl md:mr-20 mt-16 font-semibold md:text-left text-center  text-white'>{questionData[currentQuestion].Questions}</p>
              <div>
              {showScore &&
              <div className='w-full h-40 bg-blue-900'>
                   <h1 className='text-4xl pt-16 font-normal text-white leading-3 md:text-left text-center'>You Scored {score} out {questionData.length}</h1><br />
                   <button onClick={handleReload} className='rounded-full bg-blue-200 text-blue-900 text-xl text-center h-12 w-40 font-bold'>Reload</button>
              </div>
              }
              </div>
            </div>
        <div className='flex flex-col bg-gray-400 rounded-3xl justify-center h-96 gap-2'>
            {questionData[currentQuestion].Answerdata.map( (Answer) => 
              <button onClick={() => handleOptionButton(Answer.isCorrect)} className='bg-blue-900 rounded-full border-8 border-gray-300 h-16 w-5/6 mx-auto text-white text-2xl text-center hover:shadow-lg hover:shadow-white font-bold'>{Answer.Answer}</button>
            )}
        </div>
    </div>
    </div>
  );
}

export default App;
