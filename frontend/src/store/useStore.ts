import {create} from 'zustand'
import {type User} from "../interfaces/user.interfaces"

export interface StoreInterface{
    user : User | null,
    setUser : (user : User) => void,
    deleteUser : () => void
}


const useStore = create<StoreInterface>((set)=>({
    user : null,
    setUser : (user : User)=> set({user}),
    deleteUser : () => set({user : null})
}))

export default useStore;