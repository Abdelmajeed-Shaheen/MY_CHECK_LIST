import React from "react";
import WatchList from "./todoList/ToDoList";
import DoneTable from "./doneList/DoneTable";
import Add from "./addForm/Add";
import NavBAr from "./navBar/NavBar";
import { connect } from "react-redux";
import Save from "./saveform/Save";
import { deletelist } from "./redux/actions";
function App(props) {
  return (
    <>
      <NavBAr />
      <div className="container">
        <div className="text-center mt-2">
          <h3>
            {props.list === null ? (
              <b style={{ color: "red" }}>Not Saved</b>
            ) : (
              <div>
                <b style={{ color: "blue" }}>{props.list.title}</b>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => props.delete(props.list)}
                >
                  <i className="fa fa-trash-alt"></i>
                </button>
              </div>
            )}
          </h3>
        </div>
        <Add />
        <div className="row mt-3">
          <div className="col-md-6">
            <WatchList />
          </div>
          <div className="col-md-6">
            <DoneTable />
          </div>
        </div>
        {props.list === null && <Save />}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    list: state.itemState.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: item => dispatch(deletelist(item))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
