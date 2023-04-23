// @ts-check
import { legacy_createStore as createStore } from "redux";
import reducers from "../features/reducers";

/**
 * @typedef {import("redux").Store<State, Action>} Store
 * @typedef {import("redux").AnyAction} AnyAction
 */

/**
 * @template S
 * @template {AnyAction} A
 * @typedef {import("redux").Reducer<S, A>} Reducer
 */

/**
 * Reducer로부터 State type을 추출하는 Utility type
 * @template P
 * @typedef {P extends Reducer<infer T, Object> ? T : never} ExtractState
 */

/**
 * Reducer로부터 Action type을 추출하는 Utility type
 * @template P
 * @typedef {P extends Reducer<Object, infer U extends AnyAction> ? U : never} ExtractAction
 */

/**
 * @typedef {ExtractState<typeof reducers>} State
 * @typedef {ExtractAction<typeof reducers>} Action
 */

/** @type {Store} */
const store = createStore(reducers);

/**
 * @typedef {typeof store.dispatch} AppDispatch
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

export default store;