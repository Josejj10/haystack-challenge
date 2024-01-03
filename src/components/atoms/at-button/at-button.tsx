export interface AtButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const AtButton = ({ text, ...props }: AtButtonProps) => {
  return (
    <button className="bg-blue-600 rounded-md p-2 text-white" {...props}>
      {text}
    </button>
  );
};
