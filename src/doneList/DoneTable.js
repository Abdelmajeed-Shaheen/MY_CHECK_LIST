import React from "react";
import DoneTableRow from "./DoneTableRow";
import { connect } from "react-redux";
import { deletall } from "../redux/actions";
const DoneTable = props => {
  const itemList = props.done.map(item => (
    <DoneTableRow item={item} key={item} />
  ));
  return (
    <>
      <div className="alert alert-warning">
        <div className="row">
          <div className="col-9">
            <h4 className="alert-heading">
              Done-List
              <span className="badge badge-secondary badge-pill ml-1">
                {props.done.length}
              </span>
            </h4>
          </div>
          {itemList.length >= 2 && (
            <div className="col-3">
              <label onClick={props.deleteall}>
                Delete-All <i className="fa fa-trash-alt"></i>
              </label>
            </div>
          )}
        </div>
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
    done: state.itemState.done
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteall: movie => dispatch(deletall(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoneTable);
