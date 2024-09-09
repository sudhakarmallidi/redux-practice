import PlayeroneReducer from "./PlayeroneReducer";
import PlayertwoReducer from "./PlayertwoReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    playerone: PlayeroneReducer,
    playtwo: PlayertwoReducer
})

export default reducer;