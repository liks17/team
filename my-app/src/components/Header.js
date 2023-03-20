import { Link } from 'react-router-dom';

function Header(props) {
    return (
      <header className="d-flex justify-between align-center p-40">
        <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo2.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">RingsReact</h3>
            <p className="opacity-5">Магазин лучших колец</p>
          </div>
          </div>
        </Link>
        <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/kork.png" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/favorite.svg" alt="Закладки" />
          </Link>
        </li>
          <li>
            <img width={18} height={18} src="/img/ic.png" alt="Пользователь" />
          </li>
        </ul>
      </header>
    );
  }
  
  export default Header;