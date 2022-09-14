import { useState } from "react";
import Explanation from "./Explanation";
import './Score.css';

const Score = (props) => {

  const [isRetrieve, setIsRetrieve] = useState(true);
  const quizes = props.quizes;

  const reTry = () => {
    props.changePage('start');
    props.resetScoreHandler();
    props.answerHandler([]);
  }

  const retrieveAnswer = () => {
    setIsRetrieve(!isRetrieve);
  }

  return (
    <div>
        <h1>{props.name} 퀴즈에 대한 내 점수는?</h1>
        <div>
            <span className="score">{props.score}</span>
            <span className="str">점</span>
        </div>
        <div>{isRetrieve ? <button className="answer" onClick={retrieveAnswer}>정답 보기</button> : 
                    <>
                      <button className="answer" onClick={retrieveAnswer}>정답 닫기</button>
                      <Explanation quizes={quizes} />
                    </>
                    }
        </div>
        <button className="close" onClick={reTry}>다시하기</button>
    </div>
  )
}

export default Score