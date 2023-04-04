import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center my-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-orange-400">404</h1>
                <p className="text-lg">Page not found</p>
                <Link to="/" className="text-orange-400 hover:text-orange-300">
                    <Button>
                        Go back to home
                    </Button>
                    
                </Link>
            </div>
        </div>
    );
    };

export default NotFound;