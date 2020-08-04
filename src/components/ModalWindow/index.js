import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewPost } from "../../actions/post";
import { closeModal } from "../../actions/modal";
import "./modal.css";

class ModalWindow extends Component {
  render() {
    return (
      <>
        <div className="popup-bck" />
        <div className="modal-window popup-content-box">
          <button
            type="button"
            className="btn btn-danger close-btn"
            onClick={this.props.close}>
            Close
          </button>
          <form>
            <input
              id="link"
              className="input mt-4"
              type="text"
              placeholder="Photo link"
              required
            />
            <input
              id="description"
              className="input mt-4"
              type="text"
              placeholder="Photo description"
              required
            />
            <button
              type="button"
              className="button btn btn-primary mt-3"
              onClick={() =>
                this.props.newPost(
                  document.getElementById("link").value,
                  document.getElementById("description").value
                )
              }>
              Post
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newPost: (link, description) => {
      dispatch(addNewPost(link, description));
      dispatch(closeModal());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ModalWindow);
