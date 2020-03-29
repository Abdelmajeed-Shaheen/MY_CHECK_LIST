import {
  DONE,
  DELETE_W,
  DELETE_UW,
  ADD,
  NOT_DONE,
  DELETE_ALL,
  RESET,
  SAVE,
  SELECT,
  DELET_LISTS,
  DELET_LIST
} from "../actions/actionTypes";

const initialState = {
  notdone: JSON.parse(localStorage.getItem("notdone"))
    ? JSON.parse(localStorage.getItem("notdone"))
    : [],
  done: JSON.parse(localStorage.getItem("done"))
    ? JSON.parse(localStorage.getItem("done"))
    : [],
  mylists: JSON.parse(localStorage.getItem("mylists"))
    ? JSON.parse(localStorage.getItem("mylists"))
    : [],
  list: JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : null
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
      const list1 = JSON.parse(localStorage.getItem("list"));
      let alllists = JSON.parse(localStorage.getItem("mylists"));
      let mylists3 = JSON.parse(localStorage.getItem("mylists"))
        ? JSON.parse(localStorage.getItem("mylists"))
        : [];
      if (list1 && alllists) {
        alllists = alllists.filter(item => item.title !== list1.title);
        list1.done = JSON.parse(localStorage.getItem("done"));
        list1.notdone = JSON.parse(localStorage.getItem("notdone"));
        alllists.push(list1);
        localStorage.setItem("mylists", JSON.stringify(alllists));
        mylists3 = JSON.parse(localStorage.getItem("mylists"));
      }
      return {
        ...state,
        notdone: items_done,
        done: done,
        mylists: mylists3,
        lsit: list1
      };
    case NOT_DONE:
      const items_notdone = state.done.filter(a => a !== action.payload);
      const item_clicked_notdone = state.done.find(a => a === action.payload);
      const notdone = [...state.notdone];
      notdone.push(item_clicked_notdone);
      localStorage.setItem("done", JSON.stringify(items_notdone));
      localStorage.setItem("notdone", JSON.stringify(notdone));
      const list2 = JSON.parse(localStorage.getItem("list"));
      let alllists1 = JSON.parse(localStorage.getItem("mylists"));
      let mylists2 = JSON.parse(localStorage.getItem("mylists"))
        ? JSON.parse(localStorage.getItem("mylists"))
        : [];
      if (list2 && alllists1) {
        alllists1 = alllists1.filter(item => item.title !== list2.title);
        list2.done = JSON.parse(localStorage.getItem("done"));
        list2.notdone = JSON.parse(localStorage.getItem("notdone"));
        alllists1.push(list2);
        localStorage.setItem("mylists", JSON.stringify(alllists1));
        mylists2 = JSON.parse(localStorage.getItem("mylists"));
      }
      return {
        ...state,
        notdone: notdone,
        done: items_notdone,
        mylists: mylists2,
        lsit: list2
      };
    case DELETE_W:
      const items_done_delete = state.done.filter(a => a !== action.payload);
      localStorage.setItem("done", JSON.stringify(items_done_delete));
      const list3 = JSON.parse(localStorage.getItem("list"));
      let alllists2 = JSON.parse(localStorage.getItem("mylists"));
      let mylists1 = JSON.parse(localStorage.getItem("mylists"))
        ? JSON.parse(localStorage.getItem("mylists"))
        : [];
      if (list3 && alllists2) {
        alllists2 = alllists2.filter(item => item.title !== list3.title);
        list3.done = JSON.parse(localStorage.getItem("done"));
        list3.notdone = JSON.parse(localStorage.getItem("notdone"));
        alllists2.push(list3);
        localStorage.setItem("mylists", JSON.stringify(alllists2));
        mylists1 = JSON.parse(localStorage.getItem("mylists"));
      }
      return {
        ...state,
        done: items_done_delete,
        mylists: mylists1,
        lsit: list3
      };
    case DELETE_UW:
      const items_notdone_delete = state.notdone.filter(
        a => a !== action.payload
      );
      localStorage.setItem("notdone", JSON.stringify(items_notdone_delete));
      const list4 = JSON.parse(localStorage.getItem("list"));
      let alllists3 = JSON.parse(localStorage.getItem("mylists"));
      let mylists = JSON.parse(localStorage.getItem("mylists"))
        ? JSON.parse(localStorage.getItem("mylists"))
        : [];
      if (list4 && alllists3) {
        alllists3 = alllists3.filter(item => item.title !== list4.title);
        list4.done = JSON.parse(localStorage.getItem("done"));
        list4.notdone = JSON.parse(localStorage.getItem("notdone"));
        alllists3.push(list4);
        localStorage.setItem("mylists", JSON.stringify(alllists3));
        mylists = JSON.parse(localStorage.getItem("mylists"));
      }
      return {
        ...state,
        notdone: items_notdone_delete,
        mylists: mylists,
        lsit: list4
      };
    case ADD:
      const items = [...state.notdone];
      items.push(action.payload);
      const mySet = new Set(items);
      const uniqarray = [...mySet];
      localStorage.setItem("notdone", JSON.stringify(uniqarray));
      const list6 = JSON.parse(localStorage.getItem("list"));
      let alllists5 = JSON.parse(localStorage.getItem("mylists"));
      let mylists5 = JSON.parse(localStorage.getItem("mylists"))
        ? JSON.parse(localStorage.getItem("mylists"))
        : [];
      if (list6 && alllists5) {
        alllists5 = alllists5.filter(item => item.title !== list6.title);
        list6.done = JSON.parse(localStorage.getItem("done"));
        list6.notdone = JSON.parse(localStorage.getItem("notdone"));
        alllists5.push(list6);
        localStorage.setItem("mylists", JSON.stringify(alllists5));
        mylists5 = JSON.parse(localStorage.getItem("mylists"));
      }
      return {
        ...state,
        notdone: uniqarray,
        mylists: mylists5,
        lsit: list6
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
      localStorage.removeItem("list");
      return {
        ...state,
        done: [],
        notdone: [],
        list: null
      };
    case SAVE:
      const all = [...state.mylists];
      const list = {
        title: action.payload,
        done: JSON.parse(localStorage.getItem("done")),
        notdone: JSON.parse(localStorage.getItem("notdone"))
      };
      all.push(list);
      localStorage.setItem("list", JSON.stringify(list));
      localStorage.setItem("mylists", JSON.stringify(all));
      return {
        ...state,
        mylists: JSON.parse(localStorage.getItem("mylists")),
        list: JSON.parse(localStorage.getItem("list"))
      };
    case SELECT:
      localStorage.setItem("done", JSON.stringify(action.payload.done));
      localStorage.setItem("notdone", JSON.stringify(action.payload.notdone));
      localStorage.setItem("list", JSON.stringify(action.payload));
      return {
        ...state,
        done: [...JSON.parse(localStorage.getItem("done"))],
        notdone: [...JSON.parse(localStorage.getItem("notdone"))],
        list: JSON.parse(localStorage.getItem("list"))
      };
    case DELET_LISTS:
      localStorage.setItem("done", JSON.stringify([]));
      localStorage.setItem("notdone", JSON.stringify([]));
      localStorage.removeItem("mylists");
      localStorage.removeItem("list");

      return {
        ...state,
        done: [],
        notdone: [],
        mylists: [],
        list: null
      };
    case DELET_LIST:
      const list5 = JSON.parse(localStorage.getItem("list"));
      let alllists4 = JSON.parse(localStorage.getItem("mylists"));
      let newlists = JSON.parse(localStorage.getItem("mylists"))
        ? JSON.parse(localStorage.getItem("mylists"))
        : [];
      alllists4 = alllists4.filter(item => item.title !== list5.title);
      list5.done = JSON.parse(localStorage.getItem("done"));
      list5.notdone = JSON.parse(localStorage.getItem("notdone"));
      localStorage.setItem("mylists", JSON.stringify(alllists4));
      localStorage.removeItem("list");
      newlists = JSON.parse(localStorage.getItem("mylists"));
      if (newlists.length === 0) {
        localStorage.removeItem("mylists");
        localStorage.setItem("done", JSON.stringify([]));
        localStorage.setItem("notdone", JSON.stringify([]));
      }
      return {
        ...state,
        done: [],
        notdone: [],
        mylists: newlists,
        list: null
      };
    default:
      return state;
  }
};

export default reducer;
