import {
  createContext,
  useContext,
  useState,
} from "react";




const StakeContext = createContext({
  stakes: [],
  mpxBalance: "",
  xfiBalance: "",
  isOwner: false,
  totalRewardsEarned: "",
});

export const StakeContextProvider = ({ children }) => {
  const [stakes, setStakes] = useState([]);
  const [mpxBalance, setMpxBalance] = useState("");
  const [xfiBalance, setXfiBalance] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [totalRewardsEarned, setTotalRewardsEarned] = useState("");


 
 


  return (
    <StakeContext.Provider
      value={{
        stakes,
        mpxBalance,
        xfiBalance,
        isOwner,
        totalRewardsEarned,
      }}
    >
      {children}
    </StakeContext.Provider>
  );
};

export const useStake = () => {
  return useContext(StakeContext);
};
