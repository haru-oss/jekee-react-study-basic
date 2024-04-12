export const ColorfulMessage = (props) => {
    console.log(props)
    const contentStyleB = {
        color: props.color,
        fontSize: props.fontSize,
        msg: props.msg,

    };

    return (
    <p style={(contentStyleB)}>{props.msg}</p>);
}