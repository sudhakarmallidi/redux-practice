import './App.css';
import { connect } from 'react-redux';
import { incPlayerone, decPlayerone, incPlayertwo, decPlayertwo } from './Actions';

function App({playerone, playtwo, incPlayerone, decPlayerone, incPlayertwo, decPlayertwo}) {
  return (
    <div className="App">
     <h1>Player1 score: {playerone.score} </h1>
     <button onClick={()=> incPlayerone()}>Inc</button>
     <button onClick={()=> decPlayerone()}>Dec</button> <br/><hr/>
     <h1>Player2 score: {playtwo.score} </h1>
     <button onClick={()=> incPlayertwo()}>Inc</button>
     <button onClick={()=> decPlayertwo()}>Dec</button> <br/><hr/>
    </div>
  );
}

const mapStateToProps = state => ({
  playerone: state.playerone,
  playtwo: state.playtwo
})
export default connect(mapStateToProps, {incPlayerone, decPlayerone, incPlayertwo, decPlayertwo})(App);
