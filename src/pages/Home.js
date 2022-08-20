import * as React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>홈화면</p>
        </div>
    )
}

export default Home;

/*
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <p>홈화면</p>
            <p>useNavigate 훅 이용</p>
            <button onClick={()=>{navigate(-1)}}>history 뒤로 이동</button>
            <button onClick={()=>{navigate("/admin")}}>절대 경로 이동</button>
            <button onClick={()=>{navigate("../content")}}>상대 경로 이동</button>
            <button onClick={()=>{navigate("/admin", { replace: true })}}>history 이력 안남김</button>
        </div>
    )
}
*/