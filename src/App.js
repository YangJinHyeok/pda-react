// import BlinkCompnent from './components/BlinkCompnent';
// import CountComponent from './components/CountComponent';
// import CaptionImage from './components/CaptionImage';
// import HelloWorld from './components/HelloWorld';
// import { useState } from 'react';
// import FocusInputButton from "./components/FocusInputButton";
// import PrimeCalculator from "./components/PrimeCalculator";
// import MyPage from "./components/Practice/5.13/MyPage";
// import ThemeButton from "./components/Practice/5.13/ThemeButton";
// import { ThemeProvider } from "./components/Practice/5.13/ThemeProvider";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import TodoApp from "./components/TodoList/TodoApp";
// import Boardapp from "./components/Board/Boardapp";
import withUser from '../src/components/Practice/5.14/withUser'
import UserDisplay from '../src/components/Practice/5.14/UserDisplay';

const UserDisplayWithUser = withUser(UserDisplay);

function App() {
    // const [showCount, setShowCount] = useState(true);

    return (
        <div className="App">
            {/* <button onClick={(e) => {setShowCount(!showCount);}}>
                버튼
            </button>
            {showCount ? <CountComponent /> : null} */}
            {/* <HelloWorld/> */}
            {/* <CaptionImage imgUrl="https://i.namu.wiki/i/onDXLSQD5sdRk-Z4kJH_5FmLs41RuZhqW9qouHiqR_Sk15NzgC3kCIcwsrH4tAx8d7nCy-ywqxT8BXje6DmHEw.webp" caption="이건 트럭입니다."/> */}
            {/* <BlinkCompnent text="hi용"/> */}
            {/* <FocusInputButton /> */}
            {/* <PrimeCalculator text={4} /> */}
            {/* <ThemeProvider>
              <Button variant="primary" size="lg">기본</Button>
              <Button variant="danger">danger</Button>
              <Button variant="info">info</Button>
              <MyPage/>
              <ThemeButton/>
            </ThemeProvider> */}
            {/* <h1 style={{ textAlign: "center" }}>Todo App</h1>
            <TodoApp /> */}
            {/* <Boardapp/> */}
            <UserDisplayWithUser userId={1} />
        </div>
    );
}

export default App;
