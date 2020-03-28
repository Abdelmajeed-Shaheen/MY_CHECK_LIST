import React, { useState } from "react";
import { connect } from "react-redux";
import { deletelists } from "../redux/actions";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Dropitem from "./Dropitem";

const Dropdown = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const droplist = props.mylists.map(item => (
    <Dropitem item={item} key={item} />
  ));
  return (
    <ButtonDropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>MY LISTS</DropdownToggle>
      <DropdownMenu>
        {droplist.length > 0 ? (
          <>
            {droplist}
            <DropdownItem onClick={props.deletelists}>
              <b style={{ color: "red" }}>Delet all</b>
            </DropdownItem>
          </>
        ) : (
          <DropdownItem disabled>None</DropdownItem>
        )}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

const mapStateToProps = state => {
  return {
    mylists: state.itemState.mylists
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deletelists: () => dispatch(deletelists())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
