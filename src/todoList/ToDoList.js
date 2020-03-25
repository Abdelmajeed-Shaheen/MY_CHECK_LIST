import React from "react";
import ToDoListRow from "./ToDoListRow";
import { connect } from "react-redux";
const ToDoList = props => {
  const itemList = props.notdone.map(item => (
    <ToDoListRow item={item} key={item} />
  ));
  return (
    <>
      <div className="alert alert-success">
        <h4 className="alert-heading">
          To-Do-List
          <span className="badge badge-secondary badge-pill ml-1">
            {props.notdone.length}
          </span>
        </h4>
      </div>
      <div
        style={{ overflowY: "scroll", height: "350px" }}
        className="bg-light"
      >
        <ul className="list-group">{itemList}</ul>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    notdone: state.itemState.notdone
  };
};

export default connect(mapStateToProps)(ToDoList);
