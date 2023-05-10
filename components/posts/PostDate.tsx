import { parseISO, formatDistanceToNow } from 'date-fns';

type DateStringType = {
  dateString: string;
};

export const PostDate = ({ dateString }: DateStringType) => {
  const date = parseISO(dateString);
  return (
    <time className="text-sm" dateTime={dateString}>
      {formatDistanceToNow(date, { includeSeconds: true, addSuffix: true })}
    </time>
  );
};
