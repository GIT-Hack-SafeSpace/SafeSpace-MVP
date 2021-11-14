import styled from 'styled-components';

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;

  .save-change {
    background-color: #63988e !important;
    border-color: #63988e !important;
  }

  .btn-danger {
    background-color: #ed3457 !important;
    border-color: #ed3457 !important;
  }

  .btn-update {
    background-color: #63988e !important;
    border-color: #63988e !important;
    display: block;
    width: 100%;

    &.danger {
      background-color: #ed3457 !important;
      border-color: #ed3457 !important;
      border-radius: 5px;
      width: 159px;
      padding: 15px;
    }
  }

  .btn-quiz {
    background-color: #fff0e8 !important;
    border-color: #fff0e8 !important;
    color: black;
    width: 343px;
    padding: 15px 0;
    margin: 5px;
    border-style: none;
    border-radius: 5px;
    font-weight: 500;

    &:hover {
      background-color: #eea127 !important;
      border-color: #eea127 !important;
      color: white;
    }
  }
`;
