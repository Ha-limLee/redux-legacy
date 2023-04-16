// @ts-check
import { useDispatch, useSelector } from "react-redux";

/**
 * @template TState
 * @typedef {import("react-redux").TypedUseSelectorHook<TState>} TypedUseSelectorHook
 */

/**
 * @typedef {import("./store").RootState} RootState
 * @typedef {import("./store").AppDispatch} AppDispatch
 */

/** @type {() => AppDispatch} */
export const useAppDispatch = useDispatch;

/** @type {TypedUseSelectorHook<RootState>} */
export const useAppSelector = useSelector;
