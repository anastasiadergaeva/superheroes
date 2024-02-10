import React from 'react';

class Card extends React.Component {
    render() {
        const { name, universe, alterego, occupation, friends, superpowers, url } = this.props;
        return (
            <div className="card">
                <h3 className="card__header">{name}</h3>
                <ol className="card__description">
                    <li className="universe">Вселенная: {universe}</li>
                    <li className="alterego">Альтерэго: {alterego}</li>
                    <li className="occupation">Род деятельности: {occupation}</li>
                    <li className="friends">Друзья: {friends}</li>
                    <li className="superpowers">Суперсилы: {superpowers}</li>
                </ol>
                <img src={url} alt="picture" />
            </div>
        )
    }
}

export default Card;