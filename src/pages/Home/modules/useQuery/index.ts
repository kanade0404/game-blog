import {useLocation} from 'react-router-dom';

type UseQuery = () => string | null;
export const useQuery: UseQuery = () =>
  new URLSearchParams(useLocation().search).get('category_id');
