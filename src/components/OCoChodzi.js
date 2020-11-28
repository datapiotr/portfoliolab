import React from 'react';
import { Link } from 'react-router-dom';

export default function OCoCHodzi() {
    return (
        <section id="oCoChodzi">
            <p className="title">Wystarczą 4 proste kroki</p>
            <img alt='hero' src={require('../assets/Decoration.svg').default} />
            <div className="kroki">
                <div className="kroki_container">
                    <div className="kroki_container_column">
                        <img alt='hero' src={require('../assets/Icon-1.svg').default} />
                        <p>Wybierz rzeczy</p>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="kroki_container_column">
                        <img alt='hero' src={require('../assets/Icon-2.svg').default} />
                        <p>Spakuj je</p>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="kroki_container_column">
                        <img alt='hero' src={require('../assets/Icon-3.svg').default} />
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="kroki_container_column">
                        <img alt='hero' src={require('../assets/Icon-4.svg').default} />
                        <p>Zamów kuriera</p>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <button className='btn'>
                <Link to='/logowanie'>Oddaj rzeczy</Link>
            </button>
        </section>
    )
}