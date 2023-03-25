import Card from '../components/Card';
import React from 'react';

/**
 * 
 * @param items Массив карточек товаров
 * @param searchValue Значение в поисковой строке
 * @param setSearchValue Метод для установления значения в поисковой строке
 * @param onChangeSearchInput Метод для изменения поисковой строки
 * @param onAddToFavorite Метод для добавления в "Избранное"
 * @param onAddToCart Метод для добавления в корзину
 * @param isLoading Состояние загрузки
 * 
 * @returns Создает вёрстку домашней страницы
 */
function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  /**
   * 
   * @returns Возвращает метод поиска карточек товаров по вводимом в поле поиска данным
   */
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(6)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все ноутбуки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/remove.svg"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;