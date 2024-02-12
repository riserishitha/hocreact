import { useState } from "react";
function Count ({render}){
    const[increament, setincreament] = useState(0)
    const onClicking =()=>{
        setincreament (increament+1)
    }
    return  render({increament,onClicking}) 
}
export default Count;