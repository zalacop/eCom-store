import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #262626;
    padding: 30px 10px;
    margin: 0;

    a {
        color: #F5F2E7 !important;
    }
`;

export const HamburgerIcon = styled.button`
    display: block;
    background-color: #F5F2E7;
    @media (min-width: 992px) {
        display: none;
    }
`;

export const BrandLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #262626;
`;

export const CartWrapper = styled.div`
    margin: 0.5rem;
`;