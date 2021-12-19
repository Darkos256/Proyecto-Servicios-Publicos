import Navigations from "../Navigations/Navigations";

export default function Layout({children}) {
    return (
        <>
            <Navigations/>
                {children}
            <h1>Footer</h1>
        </>
    )
}
