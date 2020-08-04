import React from "react";
import "./post.css";

export default function PostItem(props) {
  return (
    <div className="ml-3 mt-3 post-block">
      <button
        type="button"
        className="btn btn-danger delete-btn"
        onClick={() => props.delete(props.id)}>
         Delete
      </button>
      <img src={props.img} alt="postPhoto" className="img w-30" />
      <p className="font-weight-light text">{props.description}</p>
      <p>Likes: {props.likes}</p>
      <button
        type="button"
        className="btn btn-primary mr-2 mb-2"
        onClick={() => props.click(props.id)}>
        Like
      </button>
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={() => props.disLike(props.id)}>
        Dislike
      </button>
    </div>
  );
}
