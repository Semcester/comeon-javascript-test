import { useEffect, useState } from "react"
import axios from "axios"

function useFetchCategories() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/categories")
      .then((response) => {
        setCategory(response.data)
      })
      .catch((response) => {
        console.log(response)
      })
  }, [])
  return { category }
}
export default useFetchCategories
