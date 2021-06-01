export const initialState=null;
export const reducer=(state,action)=>{
    if(action.type==="USER")
    {
        return action.payload;
    }
    
    return state;
}

export const reducer1=(state1,action1)=>{
    if(action1.type==="ADMIN")
    {
        return action1.payload;
    }
    
    return state1;
}
