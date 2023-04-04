import { getCategories } from "../services/products.service"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"

const CategoryList = () => {
    const { data, isLoading, error } = useQuery("categories", getCategories)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>There was an error</p>
    }

    return (
        <div className="flex flex-wrap justify-center">
            {data.categories.map((category: any) => (
                <Link to={`/products/${category.id}`} key={category.id}>
                <div key={category.id} className="flex flex-col items-center justify-center m-5 relative">
                    <img src={category.image} alt={category.name} className="w-200 h-200" />
                    
                        <h1 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center text-5xl text-orange-500">{category.name}</h1>
                    
                </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryList
