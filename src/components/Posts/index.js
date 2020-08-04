import React, { Component } from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import {
  addLike,
  addNewPost,
  disLike,
  deletePost,
  getPost,
  showPreloader
} from "../../actions/post";
import { showModal, closeModal } from "../../actions/modal";
import ModalWindow from "../ModalWindow";
import getPhotos from "../../server/photos";

class Posts extends Component {
  async componentDidMount() {
    this.props.getPost(await getPhotos());
  }
  render() {
    const postsList = this.props.posts.map(item => {
      return (
        <PostItem
          key={item.id}
          {...item}
          click={this.props.addLike}
          delete={this.props.deletePost}
          disLike={this.props.disLike}
        />
      );
    });
    const showModal = this.props.modal ? (
      <ModalWindow close={this.props.closeModal} />
    ) : null;
    // const showPreloaderItem = this.props.showPreloader ? (
    //   <div>Loading...</div>
    // ) : null;
    return (
      <div>
        {showModal}
        {postsList}
        <div className="add-post-btn">
          <button
            className="btn btn-primary btn-lg ml-3 mb-3 mt-3 add-post-btn"
            onClick={this.props.showModal}>
            Add New Post
          </button>
        </div>
        {/* {showPreloaderItem} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.postsList,
    modal: state.modalWindow.showModalWindow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLike: id => dispatch(addLike(id)),
    disLike: id => dispatch(disLike(id)),
    deletePost: id => dispatch(deletePost(id)),
    addNewPost: () => dispatch(addNewPost()),
    showModal: () => dispatch(showModal()),
    closeModal: () => dispatch(closeModal()),
    getPost: arr => dispatch(getPost(arr))
    // showPreloader: () => dispatch(showPreloader())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
