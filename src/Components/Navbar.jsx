import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import "./Style.css"

const Menu = ()=> {
    return(
        <nav class="navbar navbar-expand-lg navbar-light TextForm">
  <div class="container-fluid">
  <div class="Icon"></div>
    <a class="navbar-brand" href="/">FDG-UnderClothes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Calzado</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Indumentaria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Accesorios</a>
        </li>
      </ul>
    </div>
    <div>
        <button className="btn IconBottonNavbarUser" type="button"></button>       
    </div>
    <UserWidget></UserWidget>
    <CartWidget></CartWidget>
  </div>
</nav>
    );
}

export default Menu;