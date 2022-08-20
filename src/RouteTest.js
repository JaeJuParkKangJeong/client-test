import { Link } from 'react-router-dom';
/*
  SPA 방식에서 MPA처럼 a 태그를 사용해 페이지 이동을 처리하면, 
  페이지가 리로드 되므로 부적합.
  따라서 RouteTest 라는 컴포넌트를 만들어서 
  React Router 가 제공 하는 Link 컴포넌트를 사용.
  
  Link 컴포넌트는 to 라는 prop 에 경로를 전달하므로
  페이지가 리로드가 되지 않고 Client Side Rendering 할 수 있게 도움.
*/
const RouteTest = () => {
    return <>
        <p>Link 이용해서 이동</p>
        <Link to={'/'}>HOME</Link>
        <br/>
        <Link to={'/Matching'}>Matching</Link>
        <br/>
        <Link to={'/Editor'}>Editor</Link>
    </>
}

export default RouteTest;