import { useState } from "react";

const togetherComponent = (Origial) =>{
    function newcomp(){
        const [likeImageCounter, setLikeImageCounter] = useState(0);
    const change= ()=>{
        setLikeImageCounter(likeImageCounter+1)
    }
    return <Origial likeImageCounter={likeImageCounter} change ={change}/>
    }
    return newcomp;
}
export default togetherComponent;