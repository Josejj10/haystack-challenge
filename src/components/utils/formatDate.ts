export const formatISODate = (isoString: string) => {
  const date = new Date(isoString);

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedDate;
};
