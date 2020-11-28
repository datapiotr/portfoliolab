import React from 'react';
import { Link } from 'react-router-dom';
import ThreeColumns from './ThreeColumns'

export default function Start() {
    return (
        <section id='start'>
            <div className="start_container">
                <img alt='hero' src={require('../assets/Home-Hero-Image.jpg').default} />
                <div className='start_section1'>
                    <p className="title">Zacznij pomagać!</p>
                    <p className="title">Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img alt='decoration' src={require('../assets/Decoration.svg').default} />
                    <div className='start_section1_buttons'>

                        <button className='btn'>
                            <Link to='/logowanie'>Oddaj rzeczy</Link>
                        </button>

                        <button className='btn'><Link to='/logowanie'>Zorganizuj zbiórkę</Link></button>

                    </div>
                </div>
            </div >
            <ThreeColumns />
        </section>
    )
}