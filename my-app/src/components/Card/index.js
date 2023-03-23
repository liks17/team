import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';
/**
 * 
 * @param  id  Номер карточки товара
 * @param  title  Название товара
 * @param  imageUrl Ссылка на изображение товара
 * @param  price Цена товара
 * @param  onFavorited Метод добавления в избранное
 * @param  onPlus Метод добавления в корзину
 * @param  favorited Свойство определяющие добавлен товар в избранное или нет
 * @param  loading Свойство определяющие процесс загрузки на сервере
 * 
 *  
 * @returns Создает вёрстку для карточки товара
 */
function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) 
{
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };
  /**
 * 
 * @param  id  Номер карточки товара в корзине
 * @param parentId Номер карточки товара на сервере
 * @param  title  Название товара
 * @param  imageUrl Ссылка на изображение товара
 * @param  price Цена товара
 *  
 * @returns Вызов метода добавления в избранное описанного в App.js
 */
  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };
/**
 * 
 * @param  id  Номер карточки товара в корзине
 * @param parentId Номер карточки товара на сервере
 * @param  title  Название товара
 * @param  imageUrl Ссылка на изображение товара
 * @param  price Цена товара
 *  
 * @returns Вызов метода добавления в корзину описанного в App.js
 */
  const onClickPlus = () => {
    onPlus(obj);
  };

    return (
        <div className={styles.card}>
        {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? 'img/heartlike.svg' : 'img/heart.svg'} alt="Unliked" />
            </div>
          )}
          <img width="100%" height={135} src={imageUrl} alt="Watch" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? '/img/galka.svg' : 'img/plus.svg'}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;