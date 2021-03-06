import styled from "styled-components";

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
  .album {
    border-top: ${(props) => props.theme.border};
    height: auto;
    margin: 0.5rem auto;
    width: 70%;
    padding: 2rem;
    text-align: center;
    background-color: ${(props) => props.theme.white};
    margin-bottom: 0.5rem;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  button {
    color: ${(props) => props.theme.black};
    :hover {
      background-color: transparent;
    }
    :hover::before {
      background-color: ${(props) => props.theme.black};
    }
  }
  .edit-form {
    background-color: ${(props) => props.theme.black};
    label,
    input,
    button {
      color: ${(props) => props.theme.white};
    }
    button {
      :hover::before {
        background-color: ${(props) => props.theme.white};
      }
    }
  }
  .edit-form,
  .edit-form > label {
    border-bottom: 1px solid ${(props) => props.theme.white};
  }
`;

export default AlbumsContainer;
