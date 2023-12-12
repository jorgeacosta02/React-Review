import { useState } from "react";

const Content = () => {

    const [name, setName] = useState ('Jorge');
    const [count, setCount] = useState (0);

    const handleNameChange = () => {
        const names = ['Jorge','Juan','Marti']
        const int = Math.floor(Math.random() * 3)
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 10);
        console.log(count);
    }

    const handleClick2 = () => {
        console.log(count);
    }

    return(
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click it 2</button>
            <button onClick={handleClick2}>Click it 
            3</button>
        </main>
    )
}

export default Content