import React from 'react';

export default function ONas() {
    return (
        <section id="ONas">
            <div className="ONas_column text">
                <p className="title">O Nas</p>
                <img alt='hero' src={require('../assets/Decoration.svg').default} />
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <img alt='signature' src={require('../assets/Signature.svg').default} />
            </div>
            <div className="ONas_column image"></div>
        </section>
    )
}