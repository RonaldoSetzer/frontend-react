import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useRouterTitle() {
  const [title, setTitle] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const [name] = pathname.split('/').filter(item => item);
    setTitle(name);
  }, [pathname]);

  return { title };
}

export default useRouterTitle;
