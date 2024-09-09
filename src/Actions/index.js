

export const incPlayerone = () => async dispatch => {
 dispatch({
    type: 'INC_PLAYERONE_SCORE'
 })
}

export const decPlayerone = () => async dispatch => {
    dispatch({
       type: 'DEC_PLAYERONE_SCORE'
    })
}

export const incPlayertwo = () => async dispatch => {
    dispatch({
       type: 'INC_PLAYERTWO_SCORE'
    })
   }
   
export const decPlayertwo = () => async dispatch => {
      dispatch({
         type: 'DEC_PLAYERTWO_SCORE'
      })
}