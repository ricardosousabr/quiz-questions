import React from 'react';
import '../styles/quiz.css';

function Quiz() {
  return (
    <div className="box">
      <div>
        <h1>Welcome to quiz for studies</h1>
      </div>
      <div>
        <main className="quizBox">
          <div>
            <h2 className="nameQuestion">Question</h2>
          </div>
          <div>
            <ul>
              <li className="list">
                <input type="checkbox" />
                <p>Alternative one</p>
              </li>
              <li className="list">
                <input type="checkbox" />
                <p>Alternative two</p>
              </li>
              <li className="list">
                <input type="checkbox" />
                <p>Alternative three</p>
              </li>
              <li className="list">
                <input type="checkbox" />
                <p>Alternative four</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Quiz;
