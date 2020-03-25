import {
  NOT_DONE,
  DONE,
  DELETE_UW,
  DELETE_W,
  ADD,
  DELETE_ALL,
  RESET
} from "./actionTypes";

export const notdone = item => {
  return {
    type: NOT_DONE,
    payload: item
  };
};

export const done = item => {
  return {
    type: DONE,
    payload: item
  };
};

export const deletew = item => {
  return {
    type: DELETE_W,
    payload: item
  };
};

export const deleteuw = item => {
  return {
    type: DELETE_UW,
    payload: item
  };
};
export const add = item => {
  return {
    type: ADD,
    payload: item
  };
};
export const deletall = () => {
  return {
    type: DELETE_ALL
  };
};
export const reset = () => {
  return {
    type: RESET
  };
};
