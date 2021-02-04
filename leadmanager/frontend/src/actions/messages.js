import { CREATE_MESSAGE, GET_ERRORS } from "./types";

//Not an async call so we can directly return here instead of dispatch
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};

export const returnErorrs = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};
