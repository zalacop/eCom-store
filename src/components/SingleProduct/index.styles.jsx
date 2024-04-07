import styled from "styled-components";


export const Button = styled.button`
    background-color: #C3E1FF;
    color: #262626;
    font-weight: bold;
    box-sizing: border-box;
    transition: filter 0.3s ease-in-out, background 0.3s ease-in-out, color 0.3s ease-in-out;
    border: 1px solid transparent;
}

    :hover {
        background-color: #F2BDC7;
        color: #262626;
        font-weight: bold;
        box-shadow: 5px 5px 10px rgb(195, 225, 255);
    }
`;

export const Username = styled.p`
    font-weight: 600 !important; 
`;

export const Title = styled.h3`
    font-weight: 800 !important; 
`;
