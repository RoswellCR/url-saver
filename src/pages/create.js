import { useEffect } from "react";
import CreateForm from "../components/createForm";
import Item from "../components/item";
import ItemsContainer from "../components/itemsContainer";
import MainContainer from "../components/mainContainer";

import useReducerApp from "../store/store";

export default function Create(){
   const [state, dispatch] = useReducerApp(); 

    useEffect(()=>{
        dispatch({type:"LOAD"});
    },[]);

   return <MainContainer>
        <CreateForm dispatch={dispatch} />
        <ItemsContainer>
            {console.log(state.items)}
            {state.items.map(item => (
             <Item item={item} key={crypto.randomUUID()}/>
                ))}
        </ItemsContainer>
    </MainContainer>;
}