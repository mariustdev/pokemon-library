import {FC} from "react";

interface IErrorContainerProps {
    errorMessage?: string;
}
const ErrorContainer: FC<IErrorContainerProps> = ({errorMessage}) => {
    return (
        <div className="w-full h-24 flex flex-col justify-center items-center bg-red-50">
            <p className="text-2xl text-red-500 font-semibold">{errorMessage || 'Something went wrong...'}</p>
            <p className="mt-2 text-lg">Please try again later.</p>
        </div>
    );
};

export default ErrorContainer;
