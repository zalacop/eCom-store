import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Search />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;