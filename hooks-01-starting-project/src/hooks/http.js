import { useReducer, useCallback } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};
const httpReducer = (currentHttp, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return {
        ...currentHttp,
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        ...currentHttp,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case "ERROR":
      return {
        ...currentHttp,
        loading: false,
        error: action.error,
      };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not reached");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => {
    dispatchHttp({ type: "CLEAR" });
  }, []);

  const sendRequest = useCallback((url, method, body, reqEx, reqIdentifier) => {
    dispatchHttp({ type: "SEND_REQUEST", identifier: reqIdentifier });
    axios({
      method: method,
      url: url,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        dispatchHttp({
          type: "RESPONSE",
          responseData: response.data,
          extra: reqEx,
        });
      })
      .catch((err) => {
        dispatchHttp({ type: "ERROR", error: err.message });
      });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqEx: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear,
  };
};

export default useHttp;
