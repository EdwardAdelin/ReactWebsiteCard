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
    const handleClick = () => console.log("OUCH");
    const handleClick2 = (name: string) => console.log(
        `${name} stop clicking me!`);
    return(
    <button onClick={() => handleClick2("User, ")} style={styles}>Click me!</button>
    );
}
export default Button;