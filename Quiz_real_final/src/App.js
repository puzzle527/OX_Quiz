import { useState } from "react";
import Quiz from "./Component/Quiz/Quiz";
import Score from "./Component/Score/Score";
import Start from "./Component/Start/Start";
import quizes from "./quizes";
import Header from "./Component/Header/Header";
import './App.css';

function App() {

  const [page, setPage] = useState('start');
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);

  const pageHandler = (newPage) => {
    setPage(newPage);
  }

  const scoreHandler = (changedScore) => {
    setScore(changedScore);
  }

  const resetScoreHandler = () => {
    setScore(0);
  }

  const answerHandler = (change) => {
    setAnswer(change);
  };


  return (
    <>
      <Header />
      {page === 'start' && (<Start name="세종대왕" changePage={pageHandler} />)}
      {page === 'quiz' && (<Quiz quizes={quizes} changePage={pageHandler} calculateScore={scoreHandler} score={score} answer={answer} answerHandler={answerHandler} />)}
      {page === 'score' && (<Score name="세종대왕" quizes={quizes} score={score} changePage={pageHandler} resetScoreHandler={resetScoreHandler} answerHandler={answerHandler} />)}
    </>
  );
}

export default App;
