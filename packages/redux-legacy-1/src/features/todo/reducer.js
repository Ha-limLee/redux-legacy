// @ts-check
import { handleActions } from "redux-actions";
import { SET_TODO } from "./action";

/**
 * @typedef {import("./api").Todo} Todo
 */

/**
 * @typedef {{ [id: Pick<Todo, 'id'>['id']]: Todo }} InitialState
 */

/** @type {InitialState} */
const initialState = {};

const handleTodoActions =
  /** @type {typeof handleActions<typeof initialState, Todo>} */ (handleActions);

export default handleTodoActions(
  {
    [SET_TODO]: (state, { payload }) => {
      return {
        ...state,
        [payload.id]: { ...payload },
      };
    },
  },
  initialState,
);
