import React from "react";

// export default function CaptionImage(props) {
//     return (
//         <div style={{textAlign:"center", fontSize:"50px"}}>
//             <img src={props.imgUrl} alt={props.caption} />
//             <p>{props.caption}</p>
//         </div>
//         )
//     }

export default function CaptionImage({ imgUrl, caption }) {
    return (
        <div style={{ textAlign: "center", fontSize: "50px" }}>
            <img src={imgUrl} alt={caption} />
            <p>{caption}</p>
        </div>
    );
}
