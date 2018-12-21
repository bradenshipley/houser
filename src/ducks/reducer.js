const initialState = {
  thatThing: ""
}
//Constants
const SOMETHING = "SOMETHING"
//actioncreators
export const addSomething = thing => ({
  type: SOMETHING,
  payload: thing
})
//reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case SOMETHING:
      return {
        ...state,
        thatThing: action.payload
      }
    default:
      return state
  }
}
