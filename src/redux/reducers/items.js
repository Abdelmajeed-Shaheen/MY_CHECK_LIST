import {
  DONE,
  DELETE_W,
  DELETE_UW,
  ADD,
  NOT_DONE,
  DELETE_ALL,
  RESET
} from "../actions/actionTypes";
const initialState = {
  notdone: JSON.parse(localStorage.getItem("notdone"))
    ? JSON.parse(localStorage.getItem("notdone"))
    : [],
  done: JSON.parse(localStorage.getItem("done"))
    ? JSON.parse(localStorage.getItem("done"))
    : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DONE:
      const items_done = state.notdone.filter(a => a !== action.payload);
      const item_clicked_done = state.notdone.find(a => a === action.payload);
      const done = [...state.done];
      done.push(item_clicked_done);
      localStorage.setItem("done", JSON.stringify(done));
      localStorage.setItem("notdone", JSON.stringify(items_done));
      return {
        ...state,
        notdone: items_done,
        done: done
      };
    case NOT_DONE:
      const items_notdone = state.done.filter(a => a !== action.payload);
      const item_clicked_notdone = state.done.find(a => a === action.payload);
      const notdone = [...state.notdone];
      notdone.push(item_clicked_notdone);
      localStorage.setItem("done", JSON.stringify(items_notdone));
      localStorage.setItem("notdone", JSON.stringify(notdone));
      return {
        ...state,
        notdone: notdone,
        done: items_notdone
      };
    case DELETE_W:
      const items_done_delete = state.done.filter(a => a !== action.payload);
      localStorage.setItem("done", JSON.stringify(items_done_delete));
      return {
        ...state,
        done: items_done_delete
      };
    case DELETE_UW:
      const items_notdone_delete = state.notdone.filter(
        a => a !== action.payload
      );
      localStorage.setItem("notdone", JSON.stringify(items_notdone_delete));
      return {
        ...state,
        notdone: items_notdone_delete
      };
    case ADD:
      const items = [...state.notdone];
      items.push(action.payload);
      localStorage.setItem("notdone", JSON.stringify(items));
      return {
        ...state,
        notdone: items
      };
    case DELETE_ALL:
      localStorage.setItem("done", JSON.stringify([]));
      return {
        ...state,
        done: []
      };
    case RESET:
      localStorage.setItem("done", JSON.stringify([]));
      localStorage.setItem("notdone", JSON.stringify([]));
      return {
        ...state,
        done: [],
        notdone: []
      };
    default:
      return state;
  }
};

export default reducer;
