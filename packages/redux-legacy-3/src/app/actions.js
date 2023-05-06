// @ts-check
import { handleAction } from "redux-actions";
import { combineReducers } from "redux";

/**
 * @template S, P
 * @typedef {|
*  import("redux-actions").ReduxCompatibleReducer<S, P>
* } ReduxCompatibleReducer
*/

/**
 * @template S
 * @template P
 * @template {{
*  [K: string]: (state: S, action: {type: string; payload: P}) => S;
* }} M
* @param {M} reducerMap
* @param {S} initialState
*/
export const handleActions = (reducerMap, initialState) => {
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
