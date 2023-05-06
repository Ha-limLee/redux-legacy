// @ts-check
import { handleActions } from "../../app/actions";
import { EDIT_USER, REMOVE_USER } from "./action";

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
    [EDIT_USER]: (state
      , /** @type {{payload: User}} */ { payload }) => {
      return {
        ...state,
        userName: payload.userName,
      }
    },
    [REMOVE_USER]: (state, /** @type {{payload: Pick<User, 'userId'>}} */ { payload }) => {
      delete state[payload.userId];
      return {
        ...state,
      };
    },
  },
  initialState,
);
