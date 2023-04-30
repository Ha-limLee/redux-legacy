// @ts-check
import { createAction } from "redux-actions";

/**
 * @template T1, R
 * @typedef {import("redux-actions").ActionFunction1<T1, R>} ActionFunction1
 */

/**
 * @typedef {import("./api").Todo} Todo
 */

export const SET_TODO = 'Todo/ADD_TODO';
export const setTodo = /** @type {typeof createAction<Todo>} */ (createAction)(SET_TODO);

export const REMOVE_TODO = 'Todo/REMOVE_TODO';
export const removeTodo =
  /** @type {typeof createAction<Pick<Todo, 'id'>>} */ (createAction)(REMOVE_TODO);

/**
 * @template T
 * @typedef {{
*  [SET_TODO]: (state: T, action: ReturnType<typeof setTodo>) => T;
*  [REMOVE_TODO]: (state: T, action: ReturnType<typeof removeTodo>) => T;
* }} TodoReducerMap
*/
