import { ConfirmButtonsContainer, ConfirmContainer, ConfirmContentContainer } from './styles';
import { ConfirmProps } from './types';

export function Confirm({ message }: ConfirmProps) {
  return (
    <ConfirmContainer>
      <ConfirmContentContainer>
        <p>{message}</p>
        <ConfirmButtonsContainer>
          <button type="button" className="okayButton">OK</button>
          <button type="button" className="cancelButton">Cancel</button>
        </ConfirmButtonsContainer>
      </ConfirmContentContainer>
    </ConfirmContainer>
  );
}