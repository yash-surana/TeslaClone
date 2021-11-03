
import React from 'react';
import styled from 'styled-components';

function Section(props) {
    return (
        <Container bgImage={props.bgImg}>
            <ItemText>
                <h1> {props.modelName}</h1>
                <p>{props.description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>{props.leftButton}</LeftButton>
                <RightButton>{props.rightButton}</RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Container>
    )
}

export default Section;


const Container = styled.div`
    width : 100%;
    height : 100vh;
    background-image : ${props => `url('/images/${props.bgImage}')`} ;
    background-position : center;
    background-size : cover;
    background-repeat : no-repeat;
    display:flex;
    flex-direction : column;
    justify-content:space-between;
    align-items:center;
    // padding-bottom : 30px;
    
`


const ItemText = styled.div`
    padding-top: 18vh;
    text-align : center;
    flex-grow : 1;
        

`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom : 15px;
`
const LeftButton = styled.div`
    background-color : rgba(23,26,32,0.8);
    height : 40px;
    color : white;
    font-weight:600;
    font-size : 12px;
    opacity : 0.75;
    border-radius : 30px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform : uppercase;
    margin : 8px;
    cursor:pointer;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:rgb(57, 60, 65);
    opacity:0.70;
    font-weight:600;
`

const DownArrow = styled.img`
    height : 40px;
    // padding-bottom : 10px;
    margin-bottom:50px;
    animation: animateDown infinite 1.5s;
`