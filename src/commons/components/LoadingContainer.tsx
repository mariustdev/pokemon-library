import {FC} from "react";

const LoadingContainer: FC = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </div>
    )
}

export default LoadingContainer;
