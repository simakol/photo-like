const initalState = {
  postsList: []
  // showPreloader: false
};

function posts(state = initalState, action) {
  switch (action.type) {
    case "ADD_LIKE": {
      const newPostList = [...state.postsList];
      newPostList[action.payload].likes++;
      return { ...state, postsList: newPostList };
    }
    case "DIS_LIKE": {
      const newPostList = [...state.postsList];
      if (newPostList[action.payload].likes <= 0)
        return { ...state, postsList: newPostList };
      else newPostList[action.payload].likes--;
      return { ...state, postsList: newPostList };
    }
    case "ADD_NEW_POST": {
      const newPostList = [...state.postsList];
      const img =
        action.payload[0].substr(0, 4) !== "http"
          ? "http://i.imgur.com/u2oPC.jpg"
          : action.payload[0];
      let newPost = {
        id: newPostList.length,
        img: img,
        description: `${action.payload[1]}`,
        likes: 0
      };
      newPostList.push(newPost);
      return { ...state, postsList: newPostList };
    }
    case "GET_POST": {
      const newPostList = [...state.postsList];
      newPostList.push(...action.payload);
      return { ...state, postsList: newPostList };
    }
    case "DELETE_POST": {
      const newPostList = [...state.postsList];
      const id = newPostList[action.payload].id;
      for (let i = id; i < newPostList.length; i++) {
        newPostList[i].id--;
      }
      console.log(newPostList);
      newPostList.splice(id, 1);
      return { ...state, postsList: newPostList };
    }
    // case "SHOW_PRELOADER": {
    //   const newPostList = [...state.postsList];
    //   return { ...state, postsList: !newPostList.showPreloader };
    // }
    default: {
      return { ...state };
    }
  }
}
export default posts;
