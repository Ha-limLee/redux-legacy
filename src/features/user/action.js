// @ts-check
import { createAction } from "redux-actions";

/**
 * @typedef {import("./reducer").User} User
 */

export const EDIT_USER = 'User/EDIT_USER';
export const editUser = /** @type {typeof createAction<User>} */ (createAction)(EDIT_USER);
