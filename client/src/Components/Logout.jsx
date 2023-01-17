import React,{useState,useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../App';
export default function Logout() {
    const {state,dispatch}=useContext(UserContext);
    const navigate= useNavigate();
    const Logout=async()=>{
          try{
            const res=await fetch('/logout',{
               method:"GET",
               headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
               },
               credentials : "include"
            })
            if(res.status===401 || !res){
                window.alert("Please Logout later");
            }
            else{
                dispatch({type:"USER",payload:false})
                navigate('/')
                window.location.reload();
            }
          }catch(error)
          {
            console.log(error)
          }
    }
    useEffect(()=>{
        Logout();
    },[]);
  return (
    <div>
      
    </div>
  )
}
