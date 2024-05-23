import styled from "styled-components";
import logo from '../../assets/logo.png';
export const FlixsterLogo = styled.img`
    width:160px;
    height:80px;
`;

export const NavWrapper = styled.div`
    width:100%;
    height:83px;
    font-family: 'Bebas Neue', cursive;
    background: rgb(26, 26, 26);
    display:flex;
    align-items:center;
    padding: 10px 20px;
`;

export const NavHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`;

export const Title = styled.h1`
    font-size:3rem;
    color:rgb(248, 71, 95);
    margin-right:35px;
`;

export const NavLinks = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    text-align:center;
    color:var(--nav-link-color);
    flex:1;
`;

export const Link = styled.span`
    color:inherit;
    margin:0 5px;
    font-size:1.4rem;
    margin-right:20px;
    cursor:pointer;
`;

export const SearchButton = styled.button`
    cursor:pointer;
    background:transparent;
    border:none;
`;

export const SearchIcon = styled.img`
    width:50px;
    height:50px;
    border-radius:5px;
`;


export const SearchInput = styled.input`
    background:transparent;
    border-radius:5px;
    font-size: 16px;
    color:white;
    height:50px;
    width:100%;
    padding:5px;
    transition: border .5s ease-in;
        &:hover {
            border: 1px solid white;
        }
    @media (max-width: 769px) {
        border: 1px solid #232323;
        background: #171616;       
    }
    `;

export const SearchBox = styled.form`
    display:flex;
    align-items:center;
    width:400px;
    flex:.4;
    @media (max-width: 769px) {
        position:absolute;
        top:100px;    
        padding: 0px 10px;  
    }
   
    
`;



FlixsterLogo.defaultProps = {
    src: logo,
}

