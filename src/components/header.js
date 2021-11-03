import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a href = "#"><img src = "/images/logo.svg"/></a>
            <MenuGroup>
            <div>Model S</div>
            <div>Model 3</div>
            <div>Model X</div>
            <div>Model Y</div>
            <div>Solar Roof</div>
            <div>Solar Panels</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                {/* <a href="#">Menu</a> */}
                <MenuIconContainer onClick={()=> setBurgerStatus(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer>
                    <Close onClick={()=> setBurgerStatus(false)}/>
                </CloseContainer>
                <NavLinks>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    
                </NavLinks>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgerNav>
        </Container>
        
    )
}

export default Header

const Container = styled.div`
    display : flex;
    min-height : 60px;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px;
    position : fixed;
    top:0px;
    left:0;
    right:0;
    
    
`

const MenuGroup = styled.div`
    display : flex;
    // text-transform : uppercase;
    div{
        font-weight : 600;
        padding : 0 20px;
        cursor : pointer;
    }
    @media(max-width:1200px){
        display:none;
    }

`
const RightMenu = styled.div`
    display:flex;
    align-items : center;
    a {
        font-weight : 600;
        
        padding : 0 20px;
    }
    
`

const MenuIconContainer = styled.div`
    
    display: center;
    align-items : center;
    padding-top:5px;
    cursor:pointer;
    
    
`

const BurgerNav = styled.div`
    position : fixed;
    width : 250px;
    background : white;
    top : 0;
    right:0;
    bottom:0;
    padding : 20px;
    list-style:none;
    overflow-y:scroll;
    li{
        padding : 15px 5px;
        border-bottom : 1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }

    box-shadow : 0px 0px 25px black;
    transition : transform 0.5s ease-in-out;
    transform: ${props => props.status ?'translateX(0)':'translateX(150%)'}

`
const NavLinks = styled.div`
    display:none;
    @media(max-width:1200px){
        display:block;
    }

`
const CloseContainer = styled.div`
    width : 100%;
    display:flex;
    justify-content:flex-end;
    
    
`

const Close = styled(CloseIcon)`
    cursor:pointer; 
`