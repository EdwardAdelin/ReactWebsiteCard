import './Food.css';
function Food(){
    const food1 = "Orange";
    const food2 = "Banana";
    return(
        <div className='Food'>
        <p><i>This dude <b>loves</b> fruits:</i></p>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
        </div>
    );
}
export default Food;