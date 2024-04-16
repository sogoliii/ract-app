import { createContext, useContext, useReducer } from "react";

const users = [
  { username: "09125983323", password: "sogol" },
  { username: "09125008055", password: "ehsan" },
  { username: "09354253814", password: "khosro" },
  { username: "09128001122", password: "sara" },
  { username: "09125705856", password: "azi" },
];

const UserAuthContext = createContext();

const initialState = { user: null, isAuthenticated: false };

function reducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return initialState;
    default:
      throw new Error("unknown action");
  }
}

function UserAuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(username, password) {
    if (
      users.find(
        (element) =>
          element.username === username && element.password === password
      )
    ) {
      // console.log({ username, password });
      dispatch({ type: "login", payload: { username, password } });
    } else alert("incorrect username or password");
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <UserAuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(UserAuthContext);
  if (context === undefined) throw new Error("not using context properly!");
  return context;
}
export { UserAuthProvider, useAuth };
