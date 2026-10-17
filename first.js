import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";

function Generate(){
    const [length,setlength]=useState(10);
    const [password,setpassword]=useState(" ")
    const [numberchanged,setnumberchanged]=useState(false)
    const [characterchanged,setcharacterchanged]=useState(false)
    
    function passw(){
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let pass=" ";
        if(numberchanged){
            str+="0123456789"
        }
        if(characterchanged){
            str+="!@#$%^&*(){}:;?><,."
        }
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setpassword(pass)
    }

    useEffect(()=>{
    passw()
    },[length,numberchanged,characterchanged])

    return(
        <>
        <h1 style={{color:"white", textAlign:"center"}}>{password}</h1>
        <div className="pass">
        <input type="range" min={8} max={40} value={length} onChange={(e)=>{setlength(e.target.value)}}></input>
        <label>length({length})</label>
        <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
        <label>Numbers</label>
        <input type="checkbox" defaultChecked={characterchanged} onChange={()=>setcharacterchanged(!characterchanged)}></input>
        <label>Character</label>
        </div>
        </>
    )
}

const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<Generate/>)