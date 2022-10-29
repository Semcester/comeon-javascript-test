import { useGameNameContext } from "../context/useGameNameContext";

const GameName = () => {
  const { dispatch } = useGameNameContext();

  const getName = async (name) => {
    dispatch({ type: "SET", payload: name });
    localStorage.setItem("gamename", name);
  };

  return { getName };
};
export default GameName;
