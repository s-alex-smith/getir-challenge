import { ADD_TODO, GET_TODO, TOGGLE_TODO, SORT_TODO_ACTION, SORT_TODO_INCOMPLETE, SORT_TODO_COMPLETE, SORT_TODO_ACTION_DESC, DELETE_TODO } from "./actionTypes";

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
        const { index } = payload
        const newState = [...state.items];
        newState[index].completed = !newState[index].completed
        return {
          ...state,
          items: newState
        }
      }
      case SORT_TODO_ACTION: {
        const newState = [...state.items]
        newState.sort((a, b)=> a.action.localeCompare(b.action))
        return {
          ...state,
          items: newState
        }
      }
      case SORT_TODO_ACTION_DESC: {
        const newState = [...state.items]
        newState.sort((a, b)=> b.action.localeCompare(a.action))
        return {
          ...state,
          items: newState
        }
      }
      case SORT_TODO_INCOMPLETE: {
        const newState = [...state.items]
        newState.sort((a, b)=> a.completed-b.completed)
        return {
          ...state,
          items: newState
        }
      }
      case SORT_TODO_COMPLETE: {
        const newState = [...state.items]
        newState.sort((a, b)=> b.completed-a.completed)
        return {
          ...state,
          items: newState
        }
      }
      case DELETE_TODO: {
        const { index } = payload
        const newState = [...state.items]
        newState.splice(index, 1)
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
