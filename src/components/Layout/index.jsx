import Header from "../Header";
import Footer from "../Footer";
import { getProducts } from "../Products";
import Search from "../Search";

function Layout() {
    return (
        <>
            <Header />
            {Search()}
            {getProducts()}
            <Footer />
        </>
    );
}

export default Layout;