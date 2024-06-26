import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../redux/actions";
//onChange={e => onChange(e.target.value)}
class Add extends Component {
  state = {
    item: ""
  };
  onChange = item => {
    this.setState({ item });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.item) {
      this.props.add(this.state.item);
      this.setState({ item: "" });
    }
  };
  render() {
    const { item } = this.state;
    return (
      <div className="row mt-2">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Item...."
                id="item"
                name="item"
                value={item}
                onChange={e => this.onChange(e.target.value)}
              />
              <div className="input-group-prepend">
                <button className="input-group-text" id="basic-addon1">
                  <i className=" fa fa-plus"> </i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: item => dispatch(add(item))
  };
};

export default connect(null, mapDispatchToProps)(Add);
