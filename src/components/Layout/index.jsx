import Header from "../Header";
import Footer from "../Footer";
import { getProducts } from "../Products";

function Layout() {
    return (
        <>
            <Header />
            {getProducts()}
            <Footer />
        </>
    );
}

export default Layout;