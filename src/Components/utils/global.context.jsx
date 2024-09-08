import { createContext, useReducer, useEffect } from "react";

export const initialState = { theme: "light", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  // Función para alternar el tema
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      // console.log(data);
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider
      value={{ theme: state.theme, data: state.data, toggleTheme }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
