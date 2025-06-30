import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const DataContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recipe")) || [];
    setdata(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(data));
  }, [data]);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default DataContext;
