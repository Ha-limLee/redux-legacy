// @ts-check
import { handleActions, handleAction } from "redux-actions";
import { SET_TODO, REMOVE_TODO } from "./action";
import { combineReducers } from "redux";

/**
 * @template S, P
 * @typedef {|
*  import("redux-actions").ReduxCompatibleReducer<S, P>
* } ReduxCompatibleReducer
*/

/**
 * @template Payload
 * @typedef {import("redux-actions").Action<Payload>} Action
 */

/**
 * @template S
 * @typedef {import("./action").TodoReducerMap<S>} TodoReducerMap
 */

/**
 * @typedef {import("./api").Todo} Todo
 */

/** @type {{ [id: Pick<Todo, 'id'>['id']]: Todo }} */
const initialState = {};

/**
 * @template S
 * @param {TodoReducerMap<S>} reducerMap 
 * @param {S} initialState
 */
const handleTodoActions = (reducerMap, initialState) => {
  const actionTypes = Object.keys(reducerMap);
  const reducers = actionTypes.reduce((acc, actionType) => {
    const reducer = reducerMap[actionType];
    acc[actionType] = handleAction(actionType, reducer, initialState);
    return acc;
  }, {});
  const ret = combineReducers(reducers);

  /**
   * @template T
   * @typedef {T[keyof T]} ValueOf
   */

  /**
   * @template A
   * @typedef {A extends Action<infer P> ? P : never} ExtractPayload
   */

  /**
   * @typedef {|
   *  ExtractPayload<Parameters<ValueOf<typeof reducerMap>>[1]>
   * } Payloads
   */

  return /** @type {ReduxCompatibleReducer<S, Payloads>} */(ret);
};

export default handleTodoActions(
  {
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
  },
  initialState,
);
