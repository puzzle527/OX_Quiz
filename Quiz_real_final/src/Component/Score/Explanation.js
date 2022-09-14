import React from 'react'

const Explanation = (props) => {
  const quizes = props.quizes;

  const listItems = quizes.map((quiz, index) =>
   <li key={index}>{quiz.num + 1}번 문제 : {quiz.quiz}
     정답 : {quiz.answer} <br /> 설명 : {quiz.explanation}
      <br></br>-----------------------------------------------------------------
    </li>);

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default Explanation