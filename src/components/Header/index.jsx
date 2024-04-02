import { MdOutlineShoppingBag } from "react-icons/md";
import Nav from "../Nav";

function Header() {
    return (
        <header>
            <h1>eCom Store</h1>
            <div>
                <Nav />
            </div>
            <MdOutlineShoppingBag />
        </header>
    );
}

export default Header;