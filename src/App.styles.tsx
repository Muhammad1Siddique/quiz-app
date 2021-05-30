import styled, {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    body{
        background: #E0FFFF;
        font-size: 1rem;
        height: 100%;
        display:flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    h1{
        color:seagreen;
    }
    .start, .next{
    color: white!important;
    border-width: 0px!important;
    border-radius: 5px;
    letter-spacing: 2px;
    font-size: 16px;
    text-transform: uppercase!important;
    background-color: #8DA399;
    padding: 12px 25px;
    font-weight: 600;
    margin-top: 1.5em;
    }
    .score{
        font-size: 1.5rem;
        font-weight: 600;
        color: #2D68C4;
    }

`;