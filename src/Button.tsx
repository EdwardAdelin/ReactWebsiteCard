
function Button()
{
    const styles = {
            backgroundColor: "rgb(0, 0, 63)",
            color: "aliceblue",
            borderRadius:"5px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
    }

    return(
    <button style={styles}>Click me!</button>
    );
}
export default Button;