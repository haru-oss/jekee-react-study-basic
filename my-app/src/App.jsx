import { useState } from "react";

import { ColorfulMessage } from "./compornents/ColorfulMessage";


export const App = () => {
     const [num,setNum]  = useState(0);
    //  const [num,setNum]  = useState(0);
    //  const [ステート名,ステートを変更する為の更新関数]  = useState(ステートの初期値);
    const onClickCountUp = () =>{
        setNum(num +1);
        setNum(num +1);
    };


    return (


      <div>
        <h1 style={{color: "red"   }}>こんにちは</h1>
        <ColorfulMessage   color="blue"  fontSize="18px">元気ですか？</ColorfulMessage>
        <ColorfulMessage   color="green"  fontSize="18px">黙れ！！！！！</ColorfulMessage>

        <button onClick={onClickCountUp}> カウントアップ </button>
        <p>{num}</p>
      </div>
  );
};

