// @ts-check
import { createAction } from "redux-actions";

/**
 * @typedef {import("./reducer").User} User
 */

export const EDIT_USER = 'User/EDIT_USER';
export const editUser = /** @type {typeof createAction<User>} */ (createAction)(EDIT_USER);

export const REMOVE_USER = 'User/REMOVE_USER';
export const removeUser =
  /** @type {typeof createAction<Pick<User, 'userId'>>} */ (createAction)(REMOVE_USER);
