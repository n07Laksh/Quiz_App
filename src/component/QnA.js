import React, { useState } from 'react'

const QnA = (props) => {
    const [qna, setQna] = useState(props.data);
    const [num, setNum] = useState(0);
    const [click, setClick] = useState(false);

    const checkAnswer = (e) => {
        if (!click) {
            // set the click true to prevent the twice click
            setClick(true);
            let targetTxt = e.target; // target click element
            let answer = qna[num].correct_answers; // correct answers object 
            let options = qna[num].answers; // options object of the question
            let answerDiv = document.getElementsByClassName("list-group-item"); // div containing the answer in webpage
            let txt, txt1, correctDiv;

            //iterating answer obj and find the correct answer and assign to txt
            for (let x in answer) {
                if (answer[x] === "true") {
                    txt = x.slice(0, 8)
                }
            }

            // iterating the answer options and find the correct answer string
            for (let y in options) {
                if (y === txt)
                    txt1 = options[y]
            }

            // iterating the correct answer div and comparing with correct answer string and update bg to green white text
            for (let i of answerDiv) {
                if (i.innerText === txt1) {
                    i.style.backgroundColor = "green";
                    i.style.color = "white";
                    correctDiv = i;

                }
            }

            
            try {
                // bg red if clicked option is incorrect
                if (correctDiv !== targetTxt) {
                    targetTxt.style.backgroundColor = "red";
                    targetTxt.style.color = "white";
                }
            } catch (error) {
                alert(error)
            }

            // counting the correct and incorrect answers
            try {
                 // if clicked elem is the correct answer then
                if (targetTxt.innerText === correctDiv.innerText) {
                    props.setCorrectAnswer(props.correctAnswer + 1);
                } 
                // if the clicked answer is incorrect
                else {
                    props.setWrongAnswer(props.wrongAnswer + 1);
                }

            } catch (err) {
                alert(err)
            }
        }

    };


    //handling the next button click
    const handleNextQuestion = () => {
        let n = num + 1;
        setNum(n);
        setClick(false);
        let answerDiv = document.getElementsByClassName("list-group-item");
        for (let i of answerDiv) {
            i.style.backgroundColor = "";
            i.style.color = "";
        }


    }



    return (

        <div className='position-relative w-100 mt-5'>
            <p>Q.{num + 1} :- {qna[num].question}</p>
            <div className="card qnaDivChild border-0" style={{ width: "20rem" }}>
                <ul className="list-group list-group-flush">
                    <li onClick={(event) => checkAnswer(event)} className="list-group-item border-top">{qna[num].answers.answer_a ? qna[num].answers.answer_a : "None Of All"}</li>
                    <li onClick={(event) => checkAnswer(event)} className="list-group-item my-1">{qna[num].answers.answer_b ? qna[num].answers.answer_b : "None Of All"}</li>
                    <li onClick={(event) => checkAnswer(event)} className="list-group-item my-1">{qna[num].answers.answer_c ? qna[num].answers.answer_c : "None Of All"}</li>
                    <li onClick={(event) => checkAnswer(event)} className="list-group-item border-bottom">{qna[num].answers.answer_d ? qna[num].answers.answer_d : "None Of All"}</li>
                </ul>
                <button onClick={handleNextQuestion} disabled={click ? false : true} className="btn btn-primary border-0 mt-4">Next</button>
            </div>
        </div>
    )
}

export default QnA
