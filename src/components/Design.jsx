import React from 'react'
import {useState} from 'react'

export const Design = ({question,answer}) => {
  const [show,setShow]= useState(false);
  const [sign,setSign]= useState("+");
  function one(){
    setShow(!show);
  }
  return (
    <div  className="card" style={{Width:"50%",marginBottom:"20px"}}>
      <div class="topic" style={{display:"flex",justifyContent:"space-between"}}>
      <h2 style={{color:"black",width:"100%",paddingLeft:"10px",fontSize:"20px",cursor:"pointer"}} onClick={()=>{one()}}>{"Q."+question}</h2>
      <p style={{color:"black",paddingRight:"10px",paddingLeft:"30px"}}>{show?"-":"+"}</p>
      </div>
      {
        show && <p style={{color:"black",background:"white",border:"1px solid black",padding:"20px"}}>{answer}</p>
      }
      
    </div>
  )
}
