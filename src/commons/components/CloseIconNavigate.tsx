import {NavigateFunction} from "react-router-dom";
import {FC} from "react";
import {XMarkIcon} from "@heroicons/react/24/outline";

interface ICloseIconNavigateProps {
    navigate: NavigateFunction;
}

const CloseIconNavigate: FC<ICloseIconNavigateProps> = ({navigate}) => (
    <button className="p-1 absolute top-3 right-3" onClick={() => navigate(`/`)}>
        <XMarkIcon className="h-8 w-8" aria-hidden="true"/>
    </button>
);

export default CloseIconNavigate;
