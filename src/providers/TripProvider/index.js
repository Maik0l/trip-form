import { createContext, useState } from "react";

export const TripContext = createContext();
export const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState({});

  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripContext.Provider>
  );
};
