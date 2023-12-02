import React, {useState} from 'react';
import './MyComponent.css';
function MyComponent(){

const [name, setName] = useState<string | undefined>("Guest");
const [age, setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);
const updateName = () => {
    setName("Edward");
}
const incrementAge = () => {
    setAge(age+1);
}
const toggleEmployedStatus = () =>
{
    setIsEmployed(!isEmployed);
}

return(
    <div className='MyComponent'>
        <div className="name">
<p>Name: {name}</p>
<button onClick={updateName}>setName</button>
</div>
<div className="age">
    <p>Age: {age}</p>
    <button onClick={incrementAge}>incrementAge</button>
    </div>
<div className="isEmployed">
<p>Is employed: {isEmployed ? "Yes" : "No"}</p>
<button onClick={toggleEmployedStatus}>Hire or fire this guy!</button>
</div>
</div>

);
}
export default MyComponent