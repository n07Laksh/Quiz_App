import React, { useState } from 'react'
import QnAbody from "./QnAbody";

function Home() {
    const [qna, setQna] = useState(null);
    const [options, setOptions] = useState({ category: "", difficulty: "", questions: "", tags: "" });
    // console.log(options)

    // handling the onchange event and updating options state with spread method
    const inputChange = (e) => {
        setOptions({ ...options, [e.target.name]: e.target.value });
    }

    async function QnAfunc() {
        // accessing the quiz api question answers
        try {
            let res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=9VAwK4tF8RmTE0VAtK3LBEQFj4ZiK0AhaXpLMyJs&category=${options.category}&difficulty=${options.difficulty}&limit=${options.questions}&tags=${options.tags}`);
            res = await res.json();
            if (!res.error) {
                setQna(res);
            } else alert(res.error)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>

            {!qna ? <div className='container my-5 w-50'>
                <h2>Welcome to Quizz App</h2>
                <h5 className='my-4'>Select criteria's </h5>

                <div className='my-4'>
                    <div className='ms-1'>
                        <label htmlFor="category">Category</label>
                    </div>
                    <div>
                        <select onChange={(event) => inputChange(event)} className='select1' name="category" id="category">
                            <option value="">Any Category</option>
                            <option value="Linux">Linux</option>
                            <option value="Bash">Bash</option>
                            <option value="Uncategorized">Uncategorized</option>
                            <option value="Docker">Docker</option>
                            <option value="SQL">SQL</option>
                            <option value="CMC">CMC</option>
                            <option value="Code">Code</option>
                            <option value="DevOps">DevOps</option>
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <div className='ms-1'><label htmlFor="difficulty">Difficulty</label></div>
                    <div>
                        <select onChange={(event) => inputChange(event)} className='select1' name="difficulty" id="difficulty">
                            <option value="">Any Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>


                <div className='my-4'>
                    <div className='ms-1'>
                        <label htmlFor="questions">Number of questions</label>
                    </div>
                    <div>
                        <select onChange={(event) => inputChange(event)} className='select1' name="questions" id="questions">
                            <option value="10">10</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <div className='ms-1'>
                        <label htmlFor="tags">Tags</label>
                    </div>
                    <div>
                        <select onChange={(event) => inputChange(event)} className='select1' name="tags" id="tags">
                            <option value="Bash">Bash</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Docker">Docker</option>
                            <option value="HTML">HTML</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Kubernetes">Kubernetes</option>
                            <option value="Laravel">Laravel</option>
                            <option value="Linux">Linux</option>
                            <option value="MySQL">MySQL</option>
                            <option value="PHP">PHP</option>
                            <option value="WordPress">WordPress</option>
                        </select>
                    </div>
                </div>
                <button onClick={QnAfunc} className="btn btn-primary w-100">Next</button>
            </div>

                : <QnAbody qna={qna} />
            }
        </>
    )
}

export default Home
