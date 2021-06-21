import { HIDE_DATA} from "../../../constants/constants";

  export function HideDataAction() {
    return {
      type: HIDE_DATA,
      payload: false,
    };
  }