import api from "../../services/api";
import { createContext, useState, useEffect } from "react";

export const SelectContext = createContext();
export const SelectProvider = ({ children }) => {
  useEffect(() => {
    getCountriesData();
    getCitiesData();
  }, []);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const getCountriesData = async () => {
    const { data } = await api.get("/country");
    const results = [];
    data.forEach((value) => {
      results.push({
        label: value.name_ptbr,
        value: value.code,
      });
    });
    setCountries(results);
  };

  const getCitiesData = async () => {
    const { data } = await api.get("/city");
    const results = [];
    data.forEach((value) => {
      results.push({
        label: value.name_ptbr,
        value: value.name,
      });
    });
    setCities(results);
  };

  return (
    <SelectContext.Provider value={{ countries, cities }}>
      {children}
    </SelectContext.Provider>
  );
};
