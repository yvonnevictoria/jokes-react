import React, { useState } from 'react';
import './App.css';
import './Joke.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink, faGrinBeamSweat } from '@fortawesome/free-solid-svg-icons'
import jokes from './jokes.json';
import puns from './puns.json';

const Joke = () => {
    const [punSet, setPunSet] = useState({
        count: 0,
        icon: faSmileWink,
        iconClassName: 'smile-wink',
        name: 'puns',
        enabled: false
    });

    const [jokeSet, setJokeSet] = useState({
        count: 0,
        icon: faGrinBeamSweat,
        iconClassName: 'grin',
        name: 'jokes',
        enabled: true
    });

    const next = () => {
        switch(true) {
            case jokeSet.enabled: {
                jokeSet.count === jokes.length - 1
                ? setJokeSet({ ...jokeSet, count: 0 })
                : setJokeSet({ ...jokeSet, count: jokeSet.count + 1 });
                break;
            }
            case punSet.enabled: {
                punSet.count === puns.length - 1
                ? setPunSet({ ...punSet, count: 0 })
                : setPunSet({ ...punSet, count: punSet.count + 1 });
                break;
            }
            default:
                throw new Error();
        }
    };

    const changeSet = () => {
        setJokeSet({ ...jokeSet, enabled: !jokeSet.enabled });
        setPunSet({ ...punSet, enabled: !punSet.enabled });
    };

    return (
        <div className="App">
          <header className="App-header">
              <FontAwesomeIcon
                className={`icon ${jokeSet.enabled ? jokeSet.iconClassName : punSet.iconClassName}`}
                icon={jokeSet.enabled ? jokeSet.icon : punSet.icon} />
              <p>{jokeSet.enabled ? jokes[jokeSet.count].value : puns[punSet.count].value}</p>

            <div className="buttons">
                <button className="action-button secondary-action" type="button" onClick={() => { changeSet() }}>
                    Show me {jokeSet.enabled ? punSet.name : jokeSet.name }
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
