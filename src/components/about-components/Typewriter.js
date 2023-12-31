import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

export const Typewriting = () => {
    const[text] = useTypewriter({
        words: ['Creative.', 'Dedicated.', 'Data-driven.', 'an aspiring Engineer.'],
        loop: {},
        typeSpeed: 100
    })

    return (
        <div className = "Introduction item-3">
            <h1 style={{color: '#212427', marginLeft: '52px', fontSize:'35px', fontFamily: 'serif', fontWeight:500}}>
                I am {' '}
                <span className = 'typewriter' style= {{fontSize: '35px'}}>
                    {text}
                </span>
                <span style={{color:'black'}}>
                    <Cursor cursorStyle='|'/>
                </span>
            </h1>
        </div>
    );
};

