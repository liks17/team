function App() {
  return (
    <div className="wrapper clear">
        <div className="overlay">
          <div className="drawer">
            <h2 className="mb-30"> Корзина</h2>
            <div className="items">
            <ul className="cartTotalBlock">
              <li>
                <span>Итого: </span> 
                <div></div>   
                <b>21 498руб.</b>      
              </li>

              <li >  
                <span>Налог 5%: </span> 
                <div></div>   
                <b>1074руб.</b>      
                 </li>
            </ul>
            
            </div>

            <div className="cartItem d-flex align-center mb-20">
             
            <div style={{backgroundImage:'url(/img/sneakers/1.png'}} 
            className="cartItemImg">
        
            </div>
            
            <div className="mr-20 flex">
                <p className="mb-5">Мужские крутые кросы </p>
                <b> 12 999 руб.</b>
              </div>
                <img className="RemoveBtn" src="/img/remove.svg" alt = "Remove"/>
              </div>
              

              <div className="cartItem d-flex align-center mb-20">
             
             <div style={{backgroundImage:'url(/img/sneakers/1.png'}} 
             className="cartItemImg">
         
             </div>
             
             <div className="mr-20 flex">
                 <p className="mb-5">Мужские крутые кросы </p>
                 <b> 12 999 руб.</b>
               </div>
                 <img className="RemoveBtn" src="/img/remove.svg" alt = "Remove"/>
               </div>
               

               </div>
        </div>


      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width ={40} height={40} src="/img/logo.png"/>
        <div>
          <h3 className="text-uppercase"> React Sneakers </h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
        <img width ={18} height={18} src="/img/kork.png"/>
          <span>1205 руб. </span>
        </li>
        <li>
        <img width ={18} height={18} src="/img/ic.png"/>


        </li>
      </ul>
    </header>
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
      <h1> Все кроссовки </h1>
      <div className="search-block d-flex">
      <img img width="22" height="22"src="/img/search.png" alt = "Search"/>
      <input placeholder="Поиск..."/>
      </div>
    </div>

      <div className="d-flex">
      <div className="card">
      <div className="favorite"> 
      <img src="/img/heart.svg" alt="Unliked"/>
      </div>
    <img width="133" height="112" src="/img/sneakers/1.png" alt = "Sneakers"/>
    <h5>Мужские крутые кроссовки</h5>
    <div className = "d-flex justify-between align-center">
    <div className = "d-flex flex-column">
      <span> Цена:</span>
      <b> 12 999 руб. </b>
    </div>
    <button className="button">
      <img width={11} heigth = {11} src = "/img/plus.png" alt="Plus"/>
    </button>
    </div>
    </div>
    <div className="card">
    <img width="133" height="112" src="/img/sneakers/2.png" alt = "Sneakers"/>
    <h5>Мужские крутые кроссовки </h5>
    <div className = "d-flex justify-between align-center">
    <div className = "d-flex flex-column">
      <span> Цена:</span>
      <b> 12 999 руб. </b>
    </div>
    <button className="button">
      <img width={11} heigth = {11} src = "/img/plus.png" alt="Plus"/>
    </button>
    </div>
    </div>
    <div className="card">
    <img width="133" height="112" src="/img/sneakers/3.png" alt = "Sneakers"/>
    <h5>Мужские крутые кроссовки </h5>
    <div className = "d-flex justify-between align-center">
    <div className = "d-flex flex-column">
      <span> Цена:</span>
      <b> 12 999 руб. </b>
    </div>
    <button className="button">
      <img width={11} heigth = {11} src = "/img/plus.png" alt="Plus"/>
    </button>
    </div>
    </div>
  </div> 
  </div>
</div>
  );
}

export default App;