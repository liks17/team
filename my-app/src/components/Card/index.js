import styles from './Card.module.scss';
import React from 'react';


function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added=false }) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
  
    const onClickFavorite = () => {
      onFavorite({ id, title, imageUrl, price });
      setIsFavorite(!isFavorite);
    };

    const onClickPlus = () => {
      onPlus({ id,title, imageUrl, price });
      setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/heartlike.svg' : '/img/heart.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/galka.svg' : '/img/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;
