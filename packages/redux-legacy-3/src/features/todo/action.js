// @ts-check
import { createAction } from "redux-actions";

/**
 * @typedef {import("./api").Todo} Todo
 */

export const SET_TODO = 'Todo/ADD_TODO';
export const setTodo =
  /** @type {typeof createAction<Todo>} */ (createAction)(SET_TODO);

export const REMOVE_TODO = 'Todo/REMOVE_TODO';
export const removeTodo =
  /** @type {typeof createAction<Pick<Todo, 'id'>>} */ (createAction)(REMOVE_TODO);
