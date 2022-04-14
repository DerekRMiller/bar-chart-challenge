import { useState, useContext } from 'react';

import AppContext from '../../../state/App/AppContext';

const useBars = () => {
  const { appState } = useContext(AppContext);
  const [showDetail, setShowDetail] = useState<null | number>(null);

  return { appState, showDetail, setShowDetail };
};

export default useBars;
