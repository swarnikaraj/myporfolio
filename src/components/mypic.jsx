import styled from 'styled-components'; 



const Img=styled.img`
 width:250px;
 height:250px;
 border-radius:50%;
 border:2px solid white;
 
 @media all and (max-width: 980px) {
    width:50px;height:50px;
 }
  

`
const Div=styled.div`
display:flex;

  

 textAlignment:center;
 textAlignment:center;
 
 $ >img{margin:auto;}

`

export const Mypic=()=>{

 return (
     <Div>
     <Img src='/images/me.jpg'alt="Profile Image"/>
     </Div>
 )


}