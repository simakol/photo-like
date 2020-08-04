export const addLike = payload => {
  return {
    type: "ADD_LIKE",
    payload
  };
};
export const disLike = payload => {
  return {
    type: "DIS_LIKE",
    payload
  };
};
export const addNewPost = (...payload) => {
  return {
    type: "ADD_NEW_POST",
    payload
  };
};
export const deletePost = payload => {
  return {
    type: "DELETE_POST",
    payload
  };
};
 
export const getPost = payload => {
  return {
    type: "GET_POST",
    payload
  };
};
 
export const showPreloader = () => {
  return {
    type: "SHOW_PRELOADER"
  };
};
 