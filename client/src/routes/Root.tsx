import { Outlet, Link } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            

            <Outlet />
        </div>
    )
}

export default Root


export const rootLoader = async () => {
    return {
        title: 'React Router 6',
        description: 'React Router 6',
    }
}
