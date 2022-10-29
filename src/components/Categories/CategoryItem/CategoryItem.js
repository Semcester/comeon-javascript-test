import React from "react";
import Category from "../../../hooks/useCategory";

const CategoryItem = ({ category }) => {
  const { setCategory } = Category();

  const getCategory = (e, category) => {
    localStorage.removeItem("category");
    const id = e.id;
    setCategory(id);
  };

  return (
    <div className="category item">
      <div className="content" onClick={(e) => getCategory(category)}>
        <div className="ui medium header" style={{ textAlign: "left" }}>
          <div>{category.name}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
