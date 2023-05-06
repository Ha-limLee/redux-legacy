// @ts-check
import { handleAction } from "redux-actions";
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
 * @template P
 * @template {{
 *  [K: string]: (state: S, action: {type: string; payload: P}) => S;
 * }} M
 * @param {M} reducerMap
 * @param {S} initialState
 */
const handleActions = (reducerMap, initialState) => {
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
   * @template F
   * @typedef {|
   *  F extends (state: S, action: {type: string; payload: infer P}) => S ? P : never
   * } ExtractPayload
   */

  /**
   * @typedef {|
   *  ExtractPayload<ValueOf<typeof reducerMap>>
   * } Payloads
   */

  return /** @type {ReduxCompatibleReducer<S, Payloads>} */(ret);
};

export default handleActions(
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
