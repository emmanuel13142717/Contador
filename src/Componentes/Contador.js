import React from "react";
import '../Hojas-estilo/contador.css'
function Contador({numClics}){
    return(
        <div className='contador'>
            {numClics}
        </div>
    );
}
export default Contador;