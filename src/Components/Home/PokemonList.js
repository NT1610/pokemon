import React, { useEffect, useState } from 'react';
import "./pokemon.css";

const PokemonList = (props) => {
    const { name, id, image, abilities, viewDetail, setDetail } = props;
    const [isSelected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(id === viewDetail?.id);
    }, [viewDetail]);

    const closeDetail = () => {
        setDetail({
            id: 0,
            isOpened: false
        });
    };

    return (
        <div className=''>
            {isSelected ? (
                <section className='pokemon-list-detailed'>
                    <div className="detail-container">
                        <p className="detail-close" onClick={closeDetail}>
                            X
                        </p>
                        <div className="detail-info">
                            <img src={image} alt="pokemon" className='detail-image' />
                            <p className="detail-name">{name}</p>
                        </div>

                        <div className="detail-skill">
                            {abilities?.map((ab, index) => {
                                // console.log(ab)
                                return <div key={index} className="">{ab.ability.name}</div>;
                            })}
                        </div>
                    </div>
                </section>
            ) : (
                // pokemon-list-container flex flex-col items-center justify-center cursor-pointer bg-f4f1de m-4 p-4 rounded-lg
                <section className='pokemon-list-container'>

                    <p className='pokemon-name'> {name} </p>
                    <img src={image} alt="pokemon"></img>
                </section>
            )}
        </div>
    )
}

export default PokemonList;
