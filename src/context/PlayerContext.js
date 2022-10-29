import { createContext, useReducer, useEffect } from "react";

export const PlayerContext = createContext();
export const GameNames = createContext();
export const Search = createContext();
export const Category = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        player: action.payload,
      };
    case "LOGOUT":
      return {
        player: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    player: JSON.parse(localStorage.getItem("player")),
  });

  useEffect(() => {
    const player = JSON.parse(localStorage.getItem("player"));
    dispatch({ type: "LOGIN", payload: player });
  }, []);

  return (
    <PlayerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};
export const GameNameReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        gameName: action.payload,
      };
    default:
      return state;
  }
};

export const GameName = ({ children }) => {
  const [state, dispatch] = useReducer(GameNameReducer, {
    gameName: localStorage.getItem("gamename"),
  });

  useEffect(() => {
    const game = localStorage.getItem("gamename");
    dispatch({ type: "SET", payload: game });
  }, []);

  return (
    <GameNames.Provider value={{ ...state, dispatch }}>
      {children}
    </GameNames.Provider>
  );
};

export const SearchReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        text: action.payload,
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, {
    text: null,
  });

  useEffect(() => {
    const text = localStorage.getItem("searchTerm");
    dispatch({ type: "SET", payload: text });
  }, []);

  return (
    <Search.Provider value={{ ...state, dispatch }}>{children}</Search.Provider>
  );
};

export const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};

export const CategoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, {
    id: localStorage.getItem("category"),
  });
  useEffect(() => {
    const id = localStorage.getItem("category");
    dispatch({ type: "SET", payload: id });
  }, []);

  return (
    <Category.Provider value={{ ...state, dispatch }}>
      {children}
    </Category.Provider>
  );
};
