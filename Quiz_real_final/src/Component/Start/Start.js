import React from 'react'
import './Start.css';

const Start = (props) => {

  const clickHandler = () => {
    props.changePage('quiz');
  }

  return (
    <div>
      <div className='sejong'>
        <img src='/images/sejong.png' alt='세종대왕' />
        </div>

        <h2 className='h2'>나는 {props.name}에 대해 얼마나 알고 있을까?</h2>
      
        <button className='startbutton' onClick={clickHandler}>시작하기</button>

        <div className='social-link'>
          <button className='facebook'>facebook</button>
          <button className='twitter'>twitter</button>
          <button className='kakao'>kakao</button>
      </div>
    </div>
  )
}

export default Start