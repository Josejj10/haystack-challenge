export interface AtTagProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const AtTag = ({ title, ...props }: AtTagProps) => {
  return (
    <button
      {...props}
      className="p-1.5 border-white border bg-transparent rounded-md text-white hover:bg-amber-700 transition-all hover:cursor-pointer">
      {title?.slice(0, 15)}
    </button>
  );
};
