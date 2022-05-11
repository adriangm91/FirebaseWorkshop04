import React, { useEffect, useState } from "react";
import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth" 

const auth: Auth = getAuth();

export function useAuthentication(){
  const [ user, setUser ] = useState<User>();
  
  useEffect(()=>{
    
    const unsubscribeFromAuthStateChanged =onAuthStateChanged(auth, (user)=>{
      if (user){
        //el usuario está en nuestro estado (Está autenticado)
        setUser(user);
      } else {
        //el usuario no está autenticado
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStateChanged;
  },[]);

  return { user };
}