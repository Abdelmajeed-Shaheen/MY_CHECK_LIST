import React from "react";
import { DropdownItem } from "reactstrap";
import { connect } from "react-redux";
import { select } from "../redux/actions";
const Dropitem = props => {
  return (
    <DropdownItem onClick={() => props.select(props.item)}>
      {props.item.title}
    </DropdownItem>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    select: item => dispatch(select(item))
  };
};

export default connect(null, mapDispatchToProps)(Dropitem);
