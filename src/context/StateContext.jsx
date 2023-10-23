import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../components/reducer";

const StateContext=createContext();

export const StateContextProvider=({children})=>{
    const [productsList,setProductsList]= useState([])
    const [search,setSearch]= useState('')

    useEffect(() => {
       fetchData()
    },[])

    useEffect(() => {
      dispatch({type:"GET_PRODUCTS",payload:productsList})  
      const newSearchList= productsList.filter(pd=>pd.title.toLowerCase().includes(search))
      dispatch({type:"GET_PRODUCTS",payload:newSearchList})
    },[productsList,search])

    const fetchData=async()=>{
        const api= await fetch(`https://fakestoreapi.com/products`)
        const data= await api.json();
        setProductsList(data)
    }
   


    const initialState={
        products:[],
        cart:[]
    }

    const [state,dispatch]= useReducer(reducer,initialState)

    const data={state,dispatch,search,setSearch}
    return(
        <StateContext.Provider value={data} >
            {children}
        </StateContext.Provider>
    )
}

export const useContextCustom=()=> useContext(StateContext)