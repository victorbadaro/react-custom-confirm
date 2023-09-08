import { ConfirmButtonsContainer, ConfirmContainer, ConfirmContentContainer } from './styles';

interface ConfirmProps {
  message: string;
}

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