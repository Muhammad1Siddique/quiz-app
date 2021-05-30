import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: left;
  p {
    font-size: 1rem;
  }
  .ans-option{
    color: white!important;
    font-weight: 500;
    border-width: 0px!important;
    border-radius: 7px;
    letter-spacing: 1px;
    font-size: 16px;
    background-color: #2774AE;
    padding: 12px 25px;
    font-weight: 500;
    margin-top: 0.5em;
    width: 100%;
    text-align:center;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  }
  .qus-count{
      color: #2774AE;
      font-weight: 700;
      font-size: 1.1em;
      letter-spacing: 1px;
  }
  .qus-style{
      color: seagreen;
      font-size: 1.3em;
      letter-spacing: 1px;
  }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
  };
  
  export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    :hover {
      opacity: 0.8;
    }
    button {
      background: ${({ correct, userClicked }) =>
        correct
          ? 'linear-gradient(90deg, rgba(16,148,72,1) 55%), rgba(16,148,72,1) 55%)'
          : !correct && userClicked
          ? 'linear-gradient(90deg, #FF5656, #C16868)'
          : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    }
    `;