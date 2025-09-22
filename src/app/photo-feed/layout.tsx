import {ReactNode} from "react";

export default function Layout(props: {
    modal: ReactNode;
    children: ReactNode;
}) {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    );
}