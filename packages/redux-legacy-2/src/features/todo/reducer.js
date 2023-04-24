// @ts-check
import { handleActions } from "redux-actions";
import { SET_TODO, REMOVE_TODO } from "./action";

/**
 * @typedef {import("./api").Todo} Todo
 */

/**
 * @typedef {{ [id: Pick<Todo, 'id'>['id']]: Todo }} InitialState
 */

/**
 * @typedef {import("./action").ReducerMap<InitialState>} ReducerMap
 */

/** @type {InitialState} */
const initialState = {};

const handleTodoActions =
  /** @type {typeof handleActions<typeof initialState, Todo | Pick<Todo, 'id'>>} */ (handleActions);

// TODO: Make function that returns reducer that accepts union payload type
export default handleTodoActions(
  /** @type {ReducerMap} */
  ({
    [SET_TODO]: (state, { payload }) => {
      return {
        ...state,
        [payload.id]: { ...payload },
      };
    },
    [REMOVE_TODO]: (state, { payload }) => {
      delete state[payload.id];
      return {
        ...state,
      }
    },
  }),
  initialState,
);
