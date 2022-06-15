import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../reducer/reducer.utils";
import { USER_ACTION_TYPES } from "../store/user/user.types";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // const {currentUser} = state;

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
