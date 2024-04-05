import { create } from "zustand";

const useProductsStore = create((set, get) => ({
    products: [],
    cart: [],

    fetchProducts: async () => {
        const base = "https://v2.api.noroff.dev/online-shop";
        const response = await fetch(base);
        const json = await response.json();
        set((state) => ({ ...state, products: json.data}));
    },

    addToCart: (id, quantity = 1) => {
        set((state) => {
            const product = state.products.find(clickedProduct => id === clickedProduct.id);
            
            const productInCart = state.cart.findIndex((clickedProduct) => id === clickedProduct.id);

            if(productInCart === -1) {
                product.quantity = quantity;
                return { ...state, cart: [...state.cart, product] };
            } 

            state.cart[productInCart].quantity += quantity;
            return { ...state };
        });
    },

    clearCart: () => 
        set(() => {
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