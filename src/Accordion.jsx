import { React, useState } from 'react';

const Accordion = () => {

    return (
        <div>
            <div className='accordion'>
                <button>+</button>
                Let's suppose we're working on our FriendlyGreeting component. We want to greet the user, but there's a problem: We don't know everyone's name.
            </div>
            <div className='accordion'>
                <button>+</button>
                I ran into this exact problem when I was building a tool to generate newsletter issues. I didn't know the name of every subscriber. If I didn't know their name, I wanted to render a “fallback” value:
            </div>
        </div>
    )
}

export default Accordion;