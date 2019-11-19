import React, { useState } from 'react';
import './App.css';
import './Joke.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink, faGrinBeamSweat } from '@fortawesome/free-solid-svg-icons'
import jokes from './jokes.json';
import puns from './puns.json';

const Joke = () => {
    const [count, setCount] = useState(0);
    const [punCount, setPunCount] = useState(0);
    const [isPunSet, setIsPunSet] = useState(false);

    const next = () => {
        if (isPunSet) {
            punCount === puns.length - 1
            ? setPunCount(0)
            : setPunCount(punCount + 1)
        }
        count === jokes.length - 1
        ? setCount(0)
        : setCount(count + 1)
    };

    return (
        <div className="App">
          <header className="App-header">
            { isPunSet ? <FontAwesomeIcon className="icon smile-wink" icon={faSmileWink} /> : <FontAwesomeIcon className="icon grin" icon={faGrinBeamSweat} />}
            <p>
              { isPunSet ? puns[punCount].value : jokes[count].value }
            </p>
            <div className="buttons">
                <button className="action-button secondary-action" type="button" onClick={() => { setIsPunSet(!isPunSet) }}>
                    Change set
                </button>
                <button className="action-button primary-action" type="button" onClick={() => { next() }}>
                    Next
                </button>
            </div>
          </header>
        </div>
    );
};

export { Joke };
