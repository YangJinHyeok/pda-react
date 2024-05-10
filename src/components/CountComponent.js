// import React, { useState } from 'react'

// export default function CountComponent() {
//     const [count, setCount] = useState(0)
//     const addCount = () => {
//         setCount(count+1);
//     }

//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={addCount}>1 증가</button>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";

export default function CountComponent() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("데이터 받아오기! (이 함수는 한번만 실행됩니다.)");
        return () => {
            console.log(
                "메모리를 잡아먹으면 리소스 해제 하는 함수를 return 해 주어야 합니다."
            );
        };
    }, []);
    // useeffect의 return값은 랜더링할때와 useeffect가 종료될때 실행되는 함수

    useEffect(() => {
        console.log(`카운트가 증가할때마다 실행 ! \n -count: ${count}`);
    }, [count]);

    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1 증가</button>
        </div>
    );
}
