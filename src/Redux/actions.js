import { GET_TODO, ADD_TODO, TOGGLE_TODO, SORT_TODO_ACTION, SORT_TODO_COMPLETE, SORT_TODO_INCOMPLETE, SORT_TODO_ACTION_DESC, DELETE_TODO } from "./actionTypes";
import axios from "axios";

let nextTodoId = 2;

export const getTodo = () => async dispatch => {
  try {
    const res = await axios.get("https://my-json-server.typicode.com/s-alex-smith/todo-json/items")
    dispatch({
      type: GET_TODO,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
};

export const addTodo = item => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    item
  } 
});

export const toggleTodo = index => ({
  type: TOGGLE_TODO,
  payload: { index }
});

export const sortTodoAction = index => ({
  type: SORT_TODO_ACTION,
  payload: { index }
})

export const sortTodoActionDesc = index => ({
  type: SORT_TODO_ACTION_DESC,
  payload: { index }
})


export const sortTodoComplete = index => ({
  type: SORT_TODO_COMPLETE,
  payload: { index }
})

export const sortTodoIncomplete = index => ({
  type: SORT_TODO_INCOMPLETE,
  payload: { index }
})

export const deleteTodo = index => ({
  type: DELETE_TODO,
  payload: { index }
})
