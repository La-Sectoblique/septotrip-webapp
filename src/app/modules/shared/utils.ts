import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const parseDateToString = (date: Date): string => format(date, 'd LLL y HH:mm', { locale: fr });
