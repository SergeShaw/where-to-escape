import React from 'react'
import Button from '@material-ui/core/Button'
import dialogues from './dialogues'

import './Home.scss';

function Home({ startGame }) {
  return (
    <div className="Home">
      <div className="dialogues-wrapper">
        {dialogues[0].map((speech, i) =>
          <div
            key={i}
            className={(i + 1) % 2
              ? speech.isStartGame ? "first start" : "first"
              : speech.isStartGame ? "second start" : "second"
            }
            onClick={() => speech.isStartGame && startGame()}
          >
            <div className="speech-wrapper">
              <p>
                {speech.text}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
