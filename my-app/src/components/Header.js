import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
/**
 * 
 * @param {onClickCart} props Передаем через свойства метод для обработки нажатия на корзину
 * @returns Создает вёрстку шапки веб-страницы
 */
function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logol.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">LapTop</h3>
            <p className="opacity-5">Интернет магазин ноутбуков</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/kork.png" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/favorite.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/ic.png" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;