const initalState = {
  showModalWindow: false
};

function modalWindow(state = initalState, action) {
  switch (action.type) {
    case "SHOW_MODAL_WINDOW": {
      const showModal = !state.showModalWindow;
      return { ...state, showModalWindow: showModal };
    }
    case "CLOSE_MODAL_WINDOW": {
      const showModal = !state.showModalWindow;
      return { ...state, showModalWindow: showModal };
    }
    default: {
      return { ...state };
    }
  }
}
export default modalWindow;
