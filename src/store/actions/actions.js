import { TOGGLE_LOCKED, TOGGLE_CLOSED } from './actionTypes';

export const toggleLocked = () => {
  return { type: TOGGLE_LOCKED, payload: !prev.locked };
};
export const toggleClosed = () => {
  return { type: TOGGLE_CLOSED, payload: !prev.closed };
};
