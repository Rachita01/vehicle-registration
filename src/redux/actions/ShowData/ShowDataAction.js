import {
    SHOW_DATA
  } from "../../../constants/constants";

  export function ShowDataAction() {
    return {
      type: SHOW_DATA,
      payload: true,
    };
  }