import { GET_TODO, ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";
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

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });