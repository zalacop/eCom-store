import styled from "styled-components";


export const Button = styled.button`
    background-color: #C3E1FF;
    color: #262626;
    font-weight: bold;
    transition: filter 0.3s ease-in-out, background 0.3s ease-in-out, color 0.3s ease-in-out;
}

    :hover {
        background-color: #F2BDC7;
        color: #262626;
        filter: drop-shadow(5px 5px 10px #C3E1FF);
        font-weight: bold;
    }
`

/* #F2BDC7 -- pink
#C3E1FF -- blue
#F5F2E7 -- light colour
#F2EBC4;
  color: #262626;
*/