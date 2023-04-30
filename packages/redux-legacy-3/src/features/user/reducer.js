// @ts-check
import { handleActions } from "redux-actions";
import { EDIT_USER } from "./action";

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
    [EDIT_USER]: (state, { payload }) => {
      return {
        ...state,
        userName: payload.userName,
      }
    },
  },
  initialState,
);