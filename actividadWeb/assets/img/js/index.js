import {Productos} from "./data.js";

const ProductosSeleccionados = Productos.slice(0,1,2);

function ContenedorDesctacado(p){
    const art = document.createElement("div");
    art.className = "producto";
    art.innerHTML =`
    
    <img src="${p.img}" alt="${p.nombre}">
    <div class="body">
      <h3>${p.nombre}</h3>
      <p class="precio">$ ${p.precio.toLocaleString("es-AR")}</p>
      <a class="btn-detalle" href="./pages/producto.html?id=${p.id}" aria-label="Ver detalles de ${p.nombre}">
        Ver detalles
      </a>
    </div>
  `;
  return art;
}

function initIndex() {
  const cont = document.getElementsByClassName("productos");
  if (!cont) return;
  cont.innerHTML = "";
  destacados.forEach(p => cont.appendChild(cardDestacado(Producto)));
}



   


