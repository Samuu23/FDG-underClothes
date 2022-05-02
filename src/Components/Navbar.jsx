import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import "./Style.css"
import { Link } from "react-router-dom";

const Menu = ()=> {
    return(
        <nav class="navbar navbar-expand-lg navbar-light TextForm">
  <div class="container-fluid">
  <div class="Icon"></div>
    <Link to="/"><a class="navbar-brand" href="/">FDG-UnderClothes</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/category/Calzado"><a class="nav-link" aria-current="page" href="/">Calzado</a></Link>
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
    <Link to="/Cart"><CartWidget></CartWidget></Link>
  </div>
</nav>
    );
}

export default Menu;