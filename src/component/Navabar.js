import React from 'react'

function Navabar(props) {
    
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-brand btn-dark mx-2">Quizz App</button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        
                        
                        <div className="btn btn-primary mx-1" >Correct: {props.correctAnswer}</div>
                        <div className="btn btn-primary mx-1">Incorrect: {props.wrongAnswer}</div>
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navabar
