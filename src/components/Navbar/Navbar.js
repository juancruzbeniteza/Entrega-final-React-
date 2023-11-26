import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from '../Estilos del Button/EstilosdelButton';
import Cart from '../assets/Cart.svg'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={Logo} alt="logo" className="nav-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        products
                        </Link>
                    </li>
                </ul>
                <Link to="/Cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    <img src={Cart} alt="cart" />
                    </span>
                    my cart
                </ButtonContainer>
                </Link>
            </NavWrapper> 
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link {
        color: var(--lightGrey);
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

