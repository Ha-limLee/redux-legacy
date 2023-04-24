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
 * @template P
 * @typedef {P extends ActionFunction1<infer T, infer R> ? T : never} ExtractPayload1
 */

/**
 * @typedef {{
 *  [SET_TODO]: ExtractPayload1<typeof setTodo>;
 *  [REMOVE_TODO]: ExtractPayload1<typeof removeTodo>;
 * }} PayloadMap
 */

/**
 * @template T
 * @typedef {{
 *  [P in keyof PayloadMap]: (state: T, action: {type: string; payload: PayloadMap[P]}) => T
 * }} ReducerMap
 */
