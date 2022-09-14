import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './Quiz.css';

const Quiz = (props) => {
  const [num, setNum] = useState(0);
  const quizes = props.quizes;
  let answer = props.answer;

  const onClick = (e) => {

    if (quizes[num].answer === e.target.alt) {
      props.calculateScore(props.score + 20);
    }

    setNum(num + 1);

    if (num === 4) {
      props.changePage('score');
    }

    props.answerHandler([...answer, e.target.alt]);

  }

  const previousQuiz = () => {

    setNum(num - 1);
    const lastAnswer = answer.pop();
    props.answerHandler(answer);

    if (lastAnswer === quizes[num - 1].answer) { props.calculateScore(props.score - 20) };

  };



  return (
    <div>
      <div>
        <ProgressBar completed={num / 5 * 100} />
      </div>

      <div>
        <p className='quest'>{num + 1}번 문제</p>
        <p className='qu2'>{quizes[num].quiz}</p>
      </div>
      <div>
        <img className='circle' src='./images/O.png' alt='O' width={200} onClick={onClick} />
        <img className='no' src='./images/X.png' alt='X' width={350} onClick={onClick} />
      </div>
      <div>
        {num !== 0 ? <button className='back' onClick={previousQuiz}>이전문제</button> : ''}
      </div>

    </div>
  )
}

export default Quiz