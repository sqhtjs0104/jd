import React, { memo } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './assets/components/Header';
import Main from './assets/components/Main';

const App = memo(() => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
});

export default App;