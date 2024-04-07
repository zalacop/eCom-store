import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search";
import { Outlet } from "react-router-dom";
import { Container } from "./index.styles";

function Layout() {
    return (
        <Container className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow-1 bg-gray-100 p-5">
                <Search />
                <Outlet />
            </main>
            <Footer />
        </Container>
    );
}

export default Layout;