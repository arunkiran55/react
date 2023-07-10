import React, { useEffect, useState } from "react";

const State = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(count);
    },[])
    return(
        <div>
            <button onClick={()=>{ setCount(count+2) }}>+ Add</button>
            
            <button onClick={()=>{ setCount(count-1) }}>- Sub</button>
            <br/>
            <h1>{count}</h1>
        </div>
    )

}

export default State; 