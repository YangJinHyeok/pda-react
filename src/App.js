// import BlinkCompnent from './components/BlinkCompnent';
// import CountComponent from './components/CountComponent';
// import CaptionImage from './components/CaptionImage';
// import HelloWorld from './components/HelloWorld';
// import { useState } from 'react';
// import FocusInputButton from "./components/FocusInputButton";
// import PrimeCalculator from "./components/PrimeCalculator";
import TodoApp from "./components/TodoList/TodoApp";

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
            <h1 style={{ textAlign: "center" }}>Todo App</h1>
            <TodoApp />
        </div>
    );
}

export default App;
