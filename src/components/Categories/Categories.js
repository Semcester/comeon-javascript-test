import React from "react"
import useFetchCategories from "../../hooks/fetchCategories"
import CategoryItem from "./CategoryItem/CategoryItem"

const Categories = () => {
  const categories = useFetchCategories()

  return (
    <div className="four wide column">
      <h3 className="ui dividing header">Categories</h3>
      <div
        className="ui selection animated list category items"
        style={{ textAlign: "left" }}
      >
        {categories.category.map((category) => {
          return <CategoryItem key={category.id} category={category} />
        })}
      </div>
    </div>
  )
}

export default Categories
