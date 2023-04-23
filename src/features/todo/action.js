// @ts-check
import { createAction } from "redux-actions";

/**
 * @typedef {import("./api").Todo} Todo
 */

export const ADD_TODO = 'Todo/ADD_TODO';
export const addTodo = /** @type {typeof createAction<Todo>} */ (createAction)(ADD_TODO);
