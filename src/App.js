
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex allign-center">
          <img width={40} height={40} src="/img/logo.png" alt=""/>
          <div>
              <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt=""/>
          <span>1200 руб</span>
        </li>
        <li>
        <img width={18} height={18} src="/img/user.svg" alt=""/>
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
        <div className="card">
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers"/>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers"/>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers"/>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers"/>
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
        </div>
    </div>
    </div>
  );
}

export default App;