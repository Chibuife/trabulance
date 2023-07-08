import React from 'react'
import styled from 'styled-components'

const Logo = ({position}:{position:string}) => {
    return (
        <LogoStyle position={position}><h4>traBalance</h4> <div>Beta</div>
        </LogoStyle>
    )
}
interface LogoStyleType{
 position: string 
}
const LogoStyle = styled.div <LogoStyleType>`
display: flex;
padding-left:${({ position })=> position ==="left"?"10px":""};
width: 120px;
margin: ${({ position }) => position === "left" ? '' : "0 auto"};
h4{
    color: rgb(65 105 225/1)
}
div{
    font-size:0.5rem;
    padding: 5px 5px;
    border-radius:  4px;
    border: 1px solid rgb(74 222 128/50%);
    display: flex;
    justify-content: space-around;
    align-items: center; 
    height: 10px;
    margin-left: 10px;
}
`

export default Logo