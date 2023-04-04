import { Outlet, NavLink } from 'react-router-dom'
import { getProducts } from '../services/products.service'
import Copyright from '../components/Copyright'
import Navigation from '../components/Navigation'

export const rootLoader = async () => {
    const products = await getProducts();
    return products;
}

const Root = () => {
    return (
        <div>
            <Navigation />

            <Outlet />
            
            <Copyright />
        </div>
    )
}

export default Root


