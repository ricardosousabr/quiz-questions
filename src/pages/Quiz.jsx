import React, { useState } from 'react';
import '../styles/quiz.css';

function Quiz() {
  const [question, setQuestion] = useState();

  function checkQuestion() {
    if (question) {
      console.log('Resposta correta');
    } else {
      console.log('Resposta errada');
    }
  }

  return (
    <div className="box">
      <div>
        <h1>Welcome to quiz for studies</h1>
      </div>
      <div>
        <main className="quizBox">
          <div>
            <h2 className="nameQuestion">Quem descobriu o brasil</h2>
          </div>
          <div>
            <ul>
              <li className="list">
                <input
                  type="radio"
                  name="answer"
                  onChange={() => setQuestion(false)}
                />
                <p>Burro Jair Bolsonaro</p>
              </li>
              <li className="list">
                <input
                  type="radio"
                  name="answer"
                  onChange={() => setQuestion(true)}
                />
                <p>Pedro Álvares Cabral</p>
              </li>
              <li className="list">
                <input
                  type="radio"
                  name="answer"
                  onChange={() => setQuestion(false)}
                />
                <p>Ex-presidiário Lula</p>
              </li>
              <li className="list">
                <input
                  type="radio"
                  name="answer"
                  onChange={() => setQuestion(false)}
                />
                <p>Cristóvão Colombo</p>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" onClick={() => checkQuestion()}>
              Check
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Quiz;
