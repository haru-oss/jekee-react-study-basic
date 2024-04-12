import { ColorfulMessage } from "./compornents/ColorfulMessage";


export const App = () => {

    const onClickbutton = () =>{
        alert("くっそ！！！")
    }


    return (


      <div>
        <h1 style={{color: "red"   }}>こんにちは</h1>
        <ColorfulMessage   color="blue"  fontSize="18px">元気ですか？</ColorfulMessage>
        <ColorfulMessage   color="green"  fontSize="18px">黙れ！！！！！</ColorfulMessage>

        <button onClick={onClickbutton}>  ボタン</button>
      </div>
  );
};

