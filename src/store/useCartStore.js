// import { create } from "zustand";

// const useStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 })
// }));

// export default useStore;

import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, qty: 1 }] });
    }
  },

  removeFromCart: (id) =>
    set({
      cart: get().cart.filter((item) => item.id !== id),
    }),

  increaseQty: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    }),

  decreaseQty: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      ),
    }),

  totalPrice: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),
}));

