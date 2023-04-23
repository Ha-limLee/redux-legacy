// @ts-check
import { createAction } from "redux-actions";

/**
 * @typedef {import("./api").Todo} Todo
 */

export const SET_TODO = 'Todo/ADD_TODO';
export const setTodo = /** @type {typeof createAction<Todo>} */ (createAction)(SET_TODO);
