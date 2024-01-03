export interface AtButtonProps {
  text: string;
}

export const AtButton = ({ text }: AtButtonProps) => {
  return <button> {text}</button>;
};
