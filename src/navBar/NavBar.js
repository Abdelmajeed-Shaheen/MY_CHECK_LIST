import React from "react";
import { connect } from "react-redux";
import { reset } from "../redux/actions";
const NavBAr = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <b className="navbar-brand">My Check List</b>
      <button className="btn btn-warning my-2 my-sm-0" onClick={props.reset}>
        New List
      </button>
    </nav>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    reset: movie => dispatch(reset(movie))
  };
};

export default connect(null, mapDispatchToProps)(NavBAr);
