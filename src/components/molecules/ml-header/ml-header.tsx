export interface MlHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MlHeader = ({ className, ...props }: MlHeaderProps) => {
  return (
    <nav className="bg-zinc-800 py-2 px-4 md:px-24">
      <div
        role="heading"
        {...props}
        className="flex flex-wrap items-center gap-3 text-white ">
        <h1>
          <a
            className="hover:text-amber-500 transition-all duration-300"
            href="/"
            target="_self">
            PHOTO<span className="font-bold">SEARCH</span>
          </a>
        </h1>
        <span>
          powered{' '}
          <a
            className="hover:underline"
            href="https://unsplash.com/documentation"
            target="_blank">
            by Unsplash
          </a>
        </span>
      </div>
    </nav>
  );
};
