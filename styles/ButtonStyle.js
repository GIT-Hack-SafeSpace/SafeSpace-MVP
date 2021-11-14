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
`;
