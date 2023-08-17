'use client'
import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'
import {db} from "../../firebase.mjs";
import {getDocs} from 'firebase/firestore'

function Samplefirebase(){
    const [userList,setUserList]= useState([]);
    const userCollectionRef = collection(db,"users");

    useEffect(() =>{
        const getUserList = async () =>{
            try{
                const data = await getDocs(userCollectionRef);
                console.log(data);
            } catch (err){
                console.error(err); 
            }
        };
    },
    []);
    return (
        <div className="App">

        </div>
    );
}
export default Samplefirebase;