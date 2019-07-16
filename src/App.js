//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const initialPlayer1Value = [40] 
const initialPlayer2Value = [40]
const [lions, setLionsScore] = useState(initialPlayer1Value);
const [tigers, setTigersScore] = useState(initialPlayer2Value);

// Resets to initalValue
const resetClickHandler = () => {
  console.log("reset was clicked");
  setLionsScore(...initialPlayer1Value);
  setTigersScore(...initialPlayer2Value);
  
};

return (
    <div className="container">
      <section className="scoreboard">

        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Player 1</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lions}</div>
          </div>
          <div className="timer"></div>
          <div className="away">
            <h2 className="away__name">Player 2</h2>
            <div className="away__score">{tigers}</div>
          </div>
        </div>
        {/* <BottomRow /> */}
      </section>

      <section className="buttons">
      
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <div class="player1">Player 1</div> */}
          <div class="player1buttonwrapper">
          <button onClick={()=>setLionsScore(lions - 1)}className="homeButtons__touchdown">- Life</button>
          <button onClick={()=>setLionsScore(lions + 1)}className="homeButtons__fieldGoal">+ Life</button>
          </div>
          <div class="player1avatar"></div>
        </div>
        <div class="resetbuttonwrapper">
        <div class="magiclogo"></div>
        <button onClick={resetClickHandler}className="resetButton">Reset</button>
        </div>
        <div className="awayButtons">
          {/* <div class="player2">Player 2</div> */}
          <div class="player2buttonwrapper">
          
          <button onClick={()=>setTigersScore(tigers - 1)}className="awayButtons__touchdown">- Life</button>
          <button onClick={()=>setTigersScore(tigers + 1)}className="awayButtons__fieldGoal">+ Life</button>
          </div>
          <div class="player2avatar"></div>
        </div>

      
      </section>
    </div>
  );
}

export default App;
