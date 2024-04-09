import {Children, ReactElement, ReactNode} from "react";

interface IEachProps<T> {
    render: (item: T, index: number) => ReactNode;
    of: T[];
}

export const Each = <T,>({ render, of }: IEachProps<T>): ReactElement => {
    return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
};
