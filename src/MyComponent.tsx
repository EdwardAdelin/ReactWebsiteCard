import React, {useState} from 'react';

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
    <div>
<p>Name: {name}</p>
<button onClick={updateName}>setName</button>
    

    <p>Age: {age}</p>
    <button onClick={incrementAge}>incrementAge</button>
    

<p>Is employed: {isEmployed ? "Yes" : "No"}</p>
<button onClick={toggleEmployedStatus}>Hire or fire this guy!</button>
</div>

);
}
export default MyComponent