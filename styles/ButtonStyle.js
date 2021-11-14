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
  .create {
    background-color: #eea127 !important;
    border-color: #eea127 !important;
    width: 121px;
    padding: 8px 15px;
    margin: -15px 20px 20px;
    border-style: none;
    border-radius: 50px;
    font-weight: 400;
    box-shadow: 0px 2px 4px 0px rgba(31, 37, 50, 0.2);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(31, 37, 50, 0.2);
    -moz-box-shadow: 0px 2px 4px 0px rgba(31, 37, 50, 0.2);

    span {
      font-size: 24px
    }

    &:hover {
      background-color: #eea127 !important;
      border-color: #eea127 !important;
      color: white;
    }
  }
`;
