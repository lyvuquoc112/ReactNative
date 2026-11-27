import { createContext, useState } from "react";

interface RandomNumberContextType {
  num: number[];
  addNumber: (n: number) => void;
}
const RandomNumberContext = createContext<RandomNumberContextType | undefined>(
  undefined,
);

const NumberProvider = ({ children }: { children: React.ReactNode }) => {
  const [num, setNum] = useState([]);
  const addNumber = (n: number) => {
    setNum((prevNum) => [...prevNum, n]);
  };

  return (
    <RandomNumberContext.Provider value={{ num, addNumber }}>
      {children}
    </RandomNumberContext.Provider>
  );
};

export { RandomNumberContext, NumberProvider };
