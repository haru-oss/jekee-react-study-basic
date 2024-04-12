export const ColorfulMessage = ({ color,children,fontSize }) => {

    // const { color,children,fontSize } = props;

    const contentStyleB = {
        color,
        fontSize:fontSize,


    };

    return ( <p style={(contentStyleB)}>{children}</p>);
}


