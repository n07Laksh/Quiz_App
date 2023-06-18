import React, { useState } from 'react'
import QnA from './QnA'
import Navabar from './Navabar';

function QnAbody(props) {
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  
  return (
    <div>
      <Navabar correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} />
      <h1 className='mt-4'>Quizz App</h1>

      {props.qna ? <QnA data={props.qna} setCorrectAnswer={setCorrectAnswer} setWrongAnswer={setWrongAnswer} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} /> : <div>Loading...</div>}

    </div>

  )
}

export default QnAbody
