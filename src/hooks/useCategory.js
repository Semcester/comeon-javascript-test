import { useCategoryContext } from "../context/CategoryContext";

const Category = () => {
  const { dispatch } = useCategoryContext();

  const setCategory = async (id) => {
    if (id !== undefined) {
      localStorage.setItem("category", id);
      dispatch({ type: "SET", payload: id });
    } else {
      localStorage.setItem("category", id);
    }
  };

  return { setCategory };
};
export default Category;
