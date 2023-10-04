import styled from "styled-components";


export const Flex = styled.div`
display: flex;
gap: 5%;
text-align: center; 

@media (max-width: 600px){
    display: block;
}

.Content-Two{
    display: flex;
    justify-content: center;
}

h2{
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: -3%;
}

span{
    font-weight: 100;
}

.system-solar{
    animation: Solar 3s infinite alternate;
}

@keyframes Solar {
    0%{
        transform: scale(1)
        }
    100%{
        transform: scale(1.05);
    }
  }
`

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 2em ;
text-align: center;

input{
    margin-bottom: 2%;
    background-color: #dab2ff80;
    border-radius: 8px;
    border: none;
}
`

export const Astrounaut = styled.div`
.AstronautImage{
    width: 290px;
    height: 350px;
}
`



