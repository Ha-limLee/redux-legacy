// @ts-check
import { handleActions } from "../../app/actions";
import { editUser, EDIT_USER, removeUser, REMOVE_USER } from "./action";

/**
 * @typedef {Object} User
 * @prop {number} userId
 * @prop {string} userName
 */

/** @type {User} */
const initialState = {
  userId: 1,
  userName: 'James',
};

export default handleActions(
  {
    [EDIT_USER]: (state,
      /** @type {ReturnType<editUser>} */ { payload }) => {
      return {
        ...state,
        userName: payload.userName,
      }
    },
    [REMOVE_USER]: (state,
      /** @type {ReturnType<removeUser>} */ { payload }) => {
      delete state[payload.userId];
      return {
        ...state,
      };
    },
  },
  initialState,
);
