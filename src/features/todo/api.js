/**
 * @typedef {Object} Todo
 * @prop {number} userId
 * @prop {number} id
 * @prop {string} title
 * @prop {boolean} completed
 */

/**
 * @param {number} id
 */
export const getTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  /** @type {Todo} */
  const data = await res.json();
  return data;
};