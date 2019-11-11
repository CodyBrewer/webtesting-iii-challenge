import { TOGGLE_LOCKED, TOGGLE_CLOSED } from './actionTypes';

export const toggleLocked = e => {
  return { type: TOGGLE_LOCKED };
};
export const toggleClosed = e => {
  return { type: TOGGLE_CLOSED };
};
