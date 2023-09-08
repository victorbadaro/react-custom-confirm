import styled from 'styled-components';

export const ConfirmContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ConfirmContentContainer = styled.div`
  padding: 16px;
  min-width: 500px;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
`;

export const ConfirmButtonsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 8px;

  button {
    color: #fff;

    &.okayButton {
      background-color: green;
    }

    &.cancelButton {
      background-color: red;
    }
  }
`;