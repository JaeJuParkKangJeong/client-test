import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Matching from './pages/Mathcing';
import Editor from './pages/Editor';

import RouteTest from './RouteTest';

/*
 라이브러리의 BrowserRouter, Routes, Route 컴포넌트를 사용해 
 url 을 통해 페이지 이동 할 수 있게 
 즉, 컴포넌트가 페이지 역할을 할 수 있도록 설정해 준다.

 브라우저의 url이 바뀌면 컴포넌트를 렌더링해서 걔가 페이지 역할을 하도록 라우팅
*/

function App() {
  return (
    <div className="App">
      <RouteTest/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Matching' element={<Matching/>}/>
        <Route path='/Editor' element={<Editor/>}/>
      </Routes>
    </div>
  );
}

export default App;