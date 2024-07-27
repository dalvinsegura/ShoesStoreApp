import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Shoe from "../interfaces/ShoeInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";

// interface BearState {
//     bears: number
//     increase: (by: number) => void
//   }

//   const useBearStore = create<BearState>()(
//       persist(
//         (set) => ({
//           bears: 0,
//           increase: (by) => set((state) => ({ bears: state.bears + by })),
//         }),
//         {
//           name: 'bear-storage',
//         },
//       ),
//   )

// Let's create a global state for cart items and cart modal visibility. Cart state will storage a array of items (Shoe) and a boolean to control the visibility of the cart modal.

export interface CartState {
  cartItems: Shoe[];
  isCartModalVisible: boolean;
  addToCart: (shoe: Shoe) => void;
  removeFromCart: (shoe: Shoe) => void;
  toggleCartModal: () => void;
  clearCart: () => void;
}

const cartStore = (set: any) => ({
  cartItems: [],
  isCartModalVisible: false,
  addToCart: (shoe: Shoe) =>
    set((state: CartState) => ({ cartItems: [...state.cartItems, shoe] })),
  removeFromCart: (shoe: Shoe) =>
    set((state: CartState) => ({
      cartItems: state.cartItems.filter((item) => item.id !== shoe.id),
    })),
  toggleCartModal: () =>
    set((state: CartState) => ({
      isCartModalVisible: !state.isCartModalVisible,
    })),
  clearCart: () => set({ cartItems: [] }),
});

const useCartStore = create(
  persist(cartStore, {
    name: "cart-storage",
    storage: createJSONStorage(() => AsyncStorage),
  })
);

export { useCartStore };
