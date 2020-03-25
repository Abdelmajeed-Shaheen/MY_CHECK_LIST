import React from "react";
import { connect } from "react-redux";
import { done, deleteuw } from "../redux/actions";
const ToDoListRow = props => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="input-group ">
        <button
          className="btn btn-outline-success mr-1"
          onClick={() => props.done(props.item)}
        ></button>
        {props.item}
      </div>
      <span className="badge">
        <button
          className="btn btn-danger"
          onClick={() => props.deleteuw(props.item)}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      </span>
    </li>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    done: item => dispatch(done(item)),
    deleteuw: item => dispatch(deleteuw(item))
  };
};

export default connect(null, mapDispatchToProps)(ToDoListRow);
