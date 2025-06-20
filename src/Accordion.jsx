import { React, useState } from 'react';

const Accordion = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    return (
        <div>
            <div className='accordion'>
                <button onClick={() => setIsOpen1(!isOpen1)}>+</button>
                 
                {isOpen1 ? (
                    <div>Let's suppose we're working on our FriendlyGreeting component.</div>
    
                ) : <div>We want to greet the user, but there's a problem: We don't know everyone's name.</div>}
            </div>
            <div className='accordion'>
                <button onClick={() => setIsOpen2(!isOpen2)}>+</button>
                {isOpen2 ? (
                    <div>I ran into this exact problem when I was building a tool to generate newsletter issues.</div>
                ) : <div>I didn't know the name of every subscriber. If I didn't know their name, I wanted to render a “fallback” value:</div> }
            </div>
            <div className='accordion'>
                <button onClick={() => setIsOpen3(!isOpen3)}>+</button>
                {isOpen3 ? (
                    <div>Click me</div>
                ) : <div>Well done!</div> }
            </div>
        </div>    
    )
    
}

export default Accordion;