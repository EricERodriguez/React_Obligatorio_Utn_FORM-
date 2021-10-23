import './App.css';

function Menu() {
  return (
    <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand p-3" href="/">Celulares</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/detalle">Producto</a>
                </li>
                </ul>
            </div>
            <div class="div-inline p-4">
                <a href="/registro">
                    <button class="btn btn-outline-success my-2 my-sm-0">Registro</button>
                </a>
                <a href="/loguin">
                    <button class="btn btn-outline-success my-2 my-sm-0">Loguin</button>
                </a>
            </div>
            </nav>
    </div>
  );
}

export default Menu;