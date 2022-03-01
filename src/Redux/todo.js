import { ADD_TODO, GET_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = {
  items: []
}

  
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_TODO: {
        return { 
          ...state,
          items: [...payload] 
        }
      }
      case ADD_TODO: {
        const { item } = payload
        return { 
          items: [...state.items, item] 
        };
      }
      case TOGGLE_TODO: {
        const {index }= payload
        const newState = [...state.items];
        newState[index].completed = !newState[index].completed
        return {
          ...state,
          items: newState
        }
      }
      default:
        return state;
    }
}

export default reducer;
