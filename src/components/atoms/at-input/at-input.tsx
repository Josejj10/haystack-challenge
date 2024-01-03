import { cn } from '@/utils/cn';

export interface AtInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (text: string) => void;
}

export const AtInput = ({
  value,
  onChangeValue,
  className,
  ...props
}: AtInputProps) => {
  return (
    <input
      className={cn(
        'rounded-md border border-slate-200 px-3 py-2 text-slate-500 text-sm ',
        className,
      )}
      value={value}
      onChange={e => onChangeValue(e.target.value)}
      {...props}
    />
  );
};
