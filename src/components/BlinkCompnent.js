import React, { useEffect, useState } from 'react'


export default function BlinkCompnent({text}) {
    const [showText, setShowText] = useState(true);
    //const X = useState(초기값)
    // X[0] : State 그 자체, X[1] : State를 변경할 수 있는 함수
    
    // useEffect(()=>{
    //     const timeoutId = setInterval(()=>{
    //         setShowText(showText=>!showText);
    //     }, 1000)
        
    //     return () => {clearInterval(timeoutId)}
    // }, [])

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("호출");
            setShowText(!showText);
        }, 3000);
        return ()=>{clearInterval(intervalId);}
    }, [showText]);

    return (
        <div>
            {showText? text : null}
        </div>
    )
}


// import React, { Component, createRef } from 'react'

// export default class CBlinkCompoonent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             showText: true
//         }
//         this.intervalRef = createRef();
//     }
//     componentDidMount(){
//         this.intervalRef.current = setInterval(()=>{
//         this.setState({showText: !this.state.showText});
//     }, 1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.intervalRef.current)
//     }
//     render() {
//     return (
//         <div> {this.state.showText? this.props.text : null}</div>
//         )
//     }
// }