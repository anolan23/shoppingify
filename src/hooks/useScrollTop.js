import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollTop(ref) {
  const location = useLocation();

  useEffect(() => {
    const dashBoardContentEl = ref.current.closest('.dashboard__content');
    dashBoardContentEl.scrollTo(0, 0);
  }, [location, ref]);
}
