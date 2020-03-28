import React, { Component } from "react";
import { connect } from "react-redux";
import { save } from "../redux/actions";
//onChange={e => onChange(e.target.value)}
class Save extends Component {
  state = {
    item: ""
  };
  onChange = item => {
    this.setState({ item });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.item) {
      this.props.save(this.state.item);
      this.setState({ item: "" });
    }
  };
  render() {
    const { item } = this.state;
    return (
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Save List...."
                id="item"
                name="item"
                value={item}
                onChange={e => this.onChange(e.target.value)}
              />
              <div className="input-group-prepend">
                <button className="input-group-text" id="basic-addon1">
                  <i className=" fa fa-save"> </i>
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
    save: item => dispatch(save(item))
  };
};

export default connect(null, mapDispatchToProps)(Save);
