import React from 'react';
import { Link } from 'react-router-dom';

export default function Start() {
    return (
        <div id="start">
            <img alt='hero' src={require('../assets/Home-Hero-Image.jpg').default} />
            <div className='start_section'>
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img alt='hero' src={require('../assets/Decoration.svg').default} />
                <div className='start_section_buttons'>

                    <button className='btn'>
                        <Link to='/logowanie'>Oddaj rzeczy</Link>
                    </button>

                    <button className='btn'><Link to='/logowanie'>Zorganizuj zbiórkę</Link></button>

                </div>
            </div>
        </div >
    )
}