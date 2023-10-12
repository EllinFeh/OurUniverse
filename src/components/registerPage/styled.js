import styled from "styled-components";

export const Flex = styled.div`

//container principal
display: flex;
text-align: center; 
background-color: #20152e;
border-radius: 50px;

@media (max-width: 600px){
    flex-direction: column;
}

.Content-Two{

    margin: 3em ;
    display: flex;
    justify-content: center;

    p{
        font-size: 1.2em;
    }

    @media (max-width: 600px){
        margin: 1em ;
    }
}

.Content-One{

    margin: 3em ;
    display: flex;
    justify-content: center;

    @media (max-width: 600px){
        margin: 1em ;
    }
}

h2{
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: -1%;
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
text-align: center;

a{
    text-decoration: none;
    color: #a94dff;
    font-weight: 500;
}
a:hover{
    color: #dab2ff;
}


input::placeholder { color: #dab2ff}

input{
    box-shadow: 0 0 0 0;
    border: 0 none;
    border-radius: 8px;
    outline: 0;

    text-color: #dab2ff;
    margin-bottom: 1em;
    background: #7d659c80;
    border-bottom: solid 2px #dab2ff;
    padding: 0.5em 1em;
    width: 14em;
    
}
`

export const Button = styled.button`
color: #dab2ff;
border: solid 2px #dab2ff;
border-radius: 10px;
background: none;
padding: 0.8em;
width: 10em;
margin: 5% 0 20% 0;
`



