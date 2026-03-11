import {create} from 'zustand'

const useStore = create((set)=>({
    firstName : null,
    role : null,
    agentCode : null,
    updateRole : (role: "ADMIN" | "AGENT" | null) =>set(()=>({role : role})),
    updateFirstName : (firstName : string)=> set(()=>({firstName : firstName})),
    updateAgentCode : (agentCode : string)=> set(()=>({agentCode : agentCode})),
}))

export default useStore;