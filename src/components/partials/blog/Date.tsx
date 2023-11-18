import {format, parseISO} from 'date-fns';

export default function Date({dateString}: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString} className="italic text-gray-700 font-medium">{format(date, 'LLLL d, yyyy')}</time>
}
