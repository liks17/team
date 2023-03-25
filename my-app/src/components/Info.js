import React from 'react';
import AppContext from '../context';
 /**
  * 
  * @param title Название состояния корзины
  * @param image Ссылка на картинку
  * @param description Описание состояния корзины
  *  
  * @returns Создает вёрстку описания состояния корзины
  */
const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="img/str.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;