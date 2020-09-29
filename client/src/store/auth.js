import Cookies from "js-cookie";

const SET_USER = "auth/SET_USER";
export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
export const login = (username, password) => {
  return async (dispatch) => {
    const res = await fetch("api/session", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(setUser(data.user));
    }
    return res;
  };
};

window.login = login;

export default function authReducer(state={}, action) {
    switch (action.type) {
        case SET_USER:
                return action.user;
        default:
            return state
    }
}
