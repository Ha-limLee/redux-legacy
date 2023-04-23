// @ts-check
import { handleActions } from "redux-actions";
import { SET_TODO } from "./action";

/**
 * @typedef {import("./api").Todo} Todo
 */

const initialState = {
  todoList: /** @type {Todo[]} */ ([]),
};

const handleTodoActions =
  /** @type {typeof handleActions<typeof initialState, Todo>} */ (handleActions);

export default handleTodoActions(
  {
    [SET_TODO]: (state, { payload }) => {
      const { todoList } = state;
      return {
        ...state,
        todoList: [...todoList, payload]
      };
    },
  },
  initialState,
);
