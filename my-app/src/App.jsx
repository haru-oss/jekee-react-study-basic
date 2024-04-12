import { ColorfulMessage } from "./compornents/ColorfulMessage";


export const App = () => {

    const onClickbutton = () =>{
        alert("くっそ！！！")
    }


    return (


      <div>
        <h1 style={{color: "red"   }}>こんにちは</h1>
        <ColorfulMessage   color="blue" msg="お元気ですか？" fontSize="18px" />
        <ColorfulMessage   color="green" msg="黙れ!!!!" fontSize="18px" />

        <button onClick={onClickbutton}>  ボタン</button>
      </div>
  );
};

