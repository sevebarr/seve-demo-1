import React, { useState, useRef } from "react";
import "./SpellingBeeSolver.css";
import { Modal } from '../Modal/Modal.jsx';
import SpellingBeeLogo from '../../images/SpellingBee.png'

function Letter({ letters, setLetters, letterRef, index, placeholder }) {
  const onChange = (e) => {
    letters[index] = e.target.value.toLowerCase();
    setLetters(letters);
  };

  const handleKeyUp = (event, index) => {
    const { key } = event;

    if (key === 'Backspace' && event.target.value === '') {
      letterRef.current[index - 1].focus()
    } else if (key !== 'Tab' && event.target.value !== '') {
      letterRef.current[index + 1].focus()
    }
  };

  return (
    <div className="LetterInput">
      <input
        ref={(el) => letterRef.current[index] = el}
        onKeyUp={(event) => handleKeyUp(event, index)}
        onFocus={e => e.target.select()}
        className="Input"
        type="text"
        id="text"
        name="text"
        required
        maxLength={1}
        pattern="[A-Z][a-z]{1}"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}


export default function SpellingBeeSolver() {
  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [hints, setHints] = useState([]);
  const [error, setError] = useState(false)
  const letterRef = useRef([])
  // const baseUrl = "https://flask-production-56b53.up.railway.app"
  const baseUrl = "http://127.0.0.1:5000"

  const validateLetterInputs = () => {
    const uniqueLetters = new Set(letters)
    if (uniqueLetters.size !== 7) {
      throw new Error("Please fill out inputs with unique letters.")
    }
  }

  const handleClick = async () => {
    try {
      validateLetterInputs()
      setError(false)
      const response = await fetch(`${baseUrl}/?letters=${letters.join("")}`)
      const data = await response.json();
      const { words, hints } = data
      setWords(words.sort());
      setHints(hints.sort());
      // setBingo(bingo);

    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="SpellingBeeSolver">
      <div className="LogoContainer">Try out today's NYTimes Challenge:
        <a
          className="App-link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="SpellingBeeLogo" src={SpellingBeeLogo} alt="NY Times Spelling Be Logo" />
        </a>
      </div>
      <div className="Letters">
        <div className="center" >
          <Letter
            letterRef={letterRef}
            index={0}
            letters={letters}
            setLetters={setLetters}
            placeholder="N"
          />
        </div>
        <div className="top">
          <Letter
            letterRef={letterRef}
            index={1}
            letters={letters}
            setLetters={setLetters}
            placeholder="Y"
          />
        </div>

        <div className="top-right">
          <Letter
            letterRef={letterRef}
            index={2}
            letters={letters}
            setLetters={setLetters}
            placeholder="T"
          />
        </div>
        <div className="bottom-right">
          <Letter
            letterRef={letterRef}
            index={3}
            letters={letters}
            setLetters={setLetters}
            placeholder="I"
          />
        </div>
        <div className="bottom">
          <Letter
            letterRef={letterRef}
            index={4}
            letters={letters}
            setLetters={setLetters}
            placeholder="M"
          />
        </div>
        <div className="bottom-left">
          <Letter
            letterRef={letterRef}
            index={5}
            letters={letters}
            setLetters={setLetters}
            placeholder="E"
          />
        </div>

        <div className="top-left">
          <Letter
            letterRef={letterRef}
            index={6}
            letters={letters}
            setLetters={setLetters}
            placeholder="S"
          />
        </div>
      </div>

      {error && <div className='Error'>Please fill out inputs with unique letters.</div>}
      <button onClick={handleClick}>{words.length ? "Resubmit" : "Get Answers"}</button>

      {words.length !== 0 && (
        <div className="Answers">

          <div className="Answer">
            <Modal buttonText="Show Word List" >
              <div>Total: {words.length}</div>
              <div className="Words"> {words.map((item, i) => <div key={i}>{item}</div>)}</div>
            </Modal>
          </div>

          <div className="Answer">
            <Modal buttonText="Show 2-Letter Hints">
              <div className="Hints"> {hints.map((item, i) => <div key={i}>{item[0]}-{item[1]}</div>)}</div>
            </Modal>
          </div>
        </div>
      )
      }

    </div>
  );
}
