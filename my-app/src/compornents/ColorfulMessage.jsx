export const ColorfulMessage = (props) => {

    const { color,children,fontSize } = props;

    const contentStyleB = {
        color: color,
        fontSize:fontSize,


    };

    return ( <p style={(contentStyleB)}>{children}</p>);
}