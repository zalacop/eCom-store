import { create } from "zustand";

const saveProductToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
    const getStoredCart = localStorage.getItem("cart");
    return getStoredCart ? JSON.parse(getStoredCart) : [];
};

const useProductsStore = create((set, get) => ({
    products: [],
    cart: loadCartFromLocalStorage(),

    fetchProducts: async () => {
        const base = "https://v2.api.noroff.dev/online-shop";
        const response = await fetch(base);
        const json = await response.json();
        set((state) => ({ ...state, products: json.data}));
        saveProductToLocalStorage(json.data);
    },

    addToCart: (id, quantity = 1) => {
        set((state) => {
            const productToAdd = state.products.find((product) => product.id === id);
            const productInCartIndex = state.cart.findIndex((product) => product.id === id);
    
            if (!productToAdd) {
                state.fetchProducts();
                return state;
            };
    
            const updatedCart = [...state.cart];
    
            if (productInCartIndex === -1) {
                updatedCart.push({ ...productToAdd, quantity: quantity });
            } else {
                updatedCart[productInCartIndex].quantity += quantity;
            };
    
            saveCartToLocalStorage(updatedCart);
            return { ...state, cart: updatedCart };
        });
    },

    clearCart: () => 
        set(() => {
            saveCartToLocalStorage([]);
            saveProductToLocalStorage([]);
            return { cart: [] };
    }),

    deleteFromCart: (id) =>
    set((state) => {
        const updatedCart = state.cart.map(product => {
            if (product.id === id) {
                if (product.quantity > 0) {
                    return { ...product, quantity: product.quantity - 1 };
                }
            }
            return product;
        }).filter(product => product.id !== id || product.quantity > 0);
        
        saveCartToLocalStorage(updatedCart);
        return { ...state, cart: updatedCart };
    }),

    getCartTotal: () => {
        const cart = get().cart;
        const total = cart.reduce((total, product) => {
            const currentPrice = product.discountedPrice ? product.discountedPrice : product.price;
            total += currentPrice * product.quantity;
            return total;
        }, 0);
        return total.toFixed(2); 
    },

}));

export default useProductsStore;