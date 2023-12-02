import { useLayoutEffect } from "react";

function List()
{
    const fruits = [{name:"apple", calories: 95, id:1}
    , {name: "orange", calories: 45, id:2},
     {name: "banana", calories: 105, id:3}, 
    {name: "coconut", calories: 159, id:4}]; 
    fruits.sort((a,b)=> a.calories - b.calories);
    const listItems = fruits.map(fruit =>
         <li key={fruit.id}>{fruit.name+" "+
         fruit.calories}
         </li>);
    return(
    <div>
        <p>This is a list of fruits and they calories: </p>
    <ol>{listItems}</ol>
    </div>
    );
}
export default List;