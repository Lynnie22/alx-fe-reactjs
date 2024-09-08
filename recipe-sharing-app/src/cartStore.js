import { create } from "zustand";

const cartStore = create(set => ({
    items : [],
    addItems : (newItem) => set(state =>({items: [...state.items, newItem]})),
    deleteItems : (oldItem) => set(state =>({items: [...state.items, oldItem]})),

}))

export default cartStore