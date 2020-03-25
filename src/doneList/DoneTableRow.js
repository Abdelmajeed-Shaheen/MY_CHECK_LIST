import React from "react";
import { connect } from "react-redux";
import { notdone, deletew } from "../redux/actions";
const DoneTableRow = props => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div class="input-group ">
        <button
          className="btn btn-success mr-1"
          onClick={() => props.notdone(props.item)}
        ></button>
        <b
          style={{
            textDecorationLine: "line-through",
            textDecorationColor: "green",
            textDecorationThickness: "2px"
          }}
        >
          {props.item}
        </b>
      </div>
      <span className="badge">
        <button
          className="btn btn-danger"
          onClick={() => props.deletew(props.item)}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      </span>
    </li>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    notdone: movie => dispatch(notdone(movie)),
    deletew: movie => dispatch(deletew(movie))
  };
};

export default connect(null, mapDispatchToProps)(DoneTableRow);
