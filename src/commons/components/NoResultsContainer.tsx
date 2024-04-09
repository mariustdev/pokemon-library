import {FC} from "react";

const NoResultsContainer: FC = () => (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-4">
        <p className="text-xl text-gray-700">No results found.</p>
        <p className="text-gray-600">Please adjust your search criteria and try again.</p>
    </div>
);

export default NoResultsContainer;
