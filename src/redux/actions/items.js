import {
  NOT_DONE,
  DONE,
  DELETE_UW,
  DELETE_W,
  ADD,
  DELETE_ALL,
  RESET,
  SAVE,
  SELECT,
  DELET_LISTS,
  DELET_LIST
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
export const save = item => {
  return {
    type: SAVE,
    payload: item
  };
};
export const select = item => {
  return {
    type: SELECT,
    payload: item
  };
};
export const deletelists = () => {
  return {
    type: DELET_LISTS
  };
};
export const deletelist = item => {
  return {
    type: DELET_LIST,
    payload: item
  };
};
