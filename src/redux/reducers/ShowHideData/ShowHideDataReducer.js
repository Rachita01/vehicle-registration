import {
    SHOW_DATA,HIDE_DATA
  } from "../../../constants/constants";
  
  const ShowHideDataReducer = (state = true, action) => {
    switch (action.type) {
      case SHOW_DATA:
        return action.payload;
      case HIDE_DATA:
          return action.payload;
      default:
        return state;
    }
  };
  
  export default ShowHideDataReducer;