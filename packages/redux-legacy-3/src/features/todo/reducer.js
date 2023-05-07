// @ts-check
import { handleActions } from "../../app/actions";
import { setTodo, SET_TODO, removeTodo, REMOVE_TODO } from "./action";

/**
 * @typedef {import("./api").Todo} Todo
 */

/** @type {{ [id: Pick<Todo, 'id'>['id']]: Todo }} */
const initialState = {};

export default handleActions(
  {
    [SET_TODO]: (state,
      /** @type {ReturnType<typeof setTodo>} */ { payload }) => {
      return {
        ...state,
        [payload.id]: { ...payload },
      };
    },
    [REMOVE_TODO]: (state,
      /** @type {ReturnType<typeof removeTodo>} */ { payload }) => {
      delete state[payload.id];
      return {
        ...state,
      }
    },
  },
  initialState,
);
