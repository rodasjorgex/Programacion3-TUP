

/*
function Producto (id, nombre, descripcion, categoria, precio, stock, img) {
 
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
    this.img = img;


const Productos=[];
Productos.push(new Producto("1", "remera lacoste", "LINO", "indumentaria", "25.000", "3", ../))
Productos.push(new Producto("2", "remera adidas", "remera olgada", "indumentaria", "15.000", "2"))
Productos.push(new Producto("3", "reloj casio", "reloj de plata", "accesorios", "50.000", "1"))
Productos.push(new Producto("4", "zapatillas nike", "zapatillas deportivas", "calzado", "30.000", "4", ));
Productos.push(new Producto("5", "buzo puma", "buzo con capucha", "indumentaria", "20.000", "3", ));
Productos.push(new Producto("6", "pulsera dorada", "pulsera elegante", "accesorios", "10.000", "5", ));
Productos.push(new Producto("7", "gorra new era", "gorra ajustable", "indumentaria", "8.000", "6",))
Productos.push(new Producto("8", "zapatillas reebok", "zapatillas casuales", "calzado", "22.000", "2", ));
Productos.push(new Producto("9", "bolso adidas", "bolso deportivo","bolsos","24.000","3"));

export const productos = [
  { id: 1, nombre: "Remera Lacoste", descripcion: "Remera de lino, corte clásico.", categoria: "indumentaria", precio: 25000, stock: 3, img: "../assets/img/remera-lacoste.jpg" },
  { id: 2, nombre: "Remera Adidas", descripcion: "Remera holgada, ideal para deportes.", categoria: "indumentaria", precio: 15000, stock: 2, img: "../assets/img/remera-adidas.jpg" },
  { id: 3, nombre: "Reloj Casio", descripcion: "Reloj de plata, resistente al agua.", categoria: "accesorios", precio: 50000, stock: 1, img: "../assets/img/reloj-casio.jpg" },
  { id: 4, nombre: "Zapatillas Nike", descripcion: "Zapatillas deportivas, máxima comodidad.", categoria: "calzado", precio: 30000, stock: 4, img: "../assets/img/zapatillas-nike.jpg" },
  { id: 5, nombre: "Buzo Puma", descripcion: "Buzo con capucha, tejido suave.", categoria: "indumentaria", precio: 20000, stock: 3, img: "../assets/img/buzo-puma.jpg" },
  { id: 6, nombre: "Pulsera Dorada", descripcion: "Pulsera elegante de acero inoxidable.", categoria: "accesorios", precio: 10000, stock: 5, img: "../assets/img/pulsera-dorada.jpg" },
  { id: 7, nombre: "Gorra New Era", descripcion: "Gorra ajustable, diseño moderno.", categoria: "indumentaria", precio: 8000, stock: 6, img: "../assets/img/gorra-new-era.jpg" },
  { id: 8, nombre: "Zapatillas Reebok", descripcion: "Zapatillas casuales, suela antideslizante.", categoria: "calzado", precio: 22000, stock: 2, img: "../assets/img/zapatillas-reebok.jpg" },
  { id: 9, nombre: "Bolso Adidas", descripcion: "Bolso deportivo con múltiples compartimentos.", categoria: "bolsos", precio: 24000, stock: 3, img: "../assets/img/bolso-adidas.jpg" }
];
Cambios realizados

Formato de objetos literales:

En lugar de usar new Producto(...) para crear instancias, cada producto es un objeto literal con las propiedades id, nombre, descripcion, categoria, precio, stock, e img.
Se exporta el array como export const productos, siguiendo el ejemplo proporcionado.


Corrección de errores:

Los precios se convirtieron a números (por ejemplo, "25.000" → 25000).
Se agregaron rutas de imágenes completas y consistentes para todos los productos (por ejemplo, ../assets/img/remera-lacoste.jpg), asumiendo un formato similar al del ejemplo.
Se corrigieron las comas faltantes y la sintaxis incorrecta en el código original (como ../ en la primera línea).


Cumplimiento de requisitos:

8+ productos: El array contiene 9 productos, cumpliendo con el mínimo requerido.
4+ categorías: Las categorías incluidas son indumentaria, accesorios, calzado, y bolsos (4 categorías distintas).
Cada producto tiene una descripción breve y adecuada, siguiendo el estilo del ejemplo proporcionado (por ejemplo, "Calabaza cuero, virola alpaca.").


Estructura consistente:

Todos los objetos tienen las mismas propiedades que en el ejemplo: id, nombre, descripcion, categoria, precio, stock, e img.
Los id son únicos y consecutivos (1 al 9), aunque podrían ajustarse a otro formato (como 101, 201, etc.) si prefieres seguir el estilo del ejemplo proporcionado.



Notas adicionales

Imágenes: Como el código original no proporcionaba rutas completas para las imágenes, usé nombres ficticios basados en los productos (por ejemplo, ../assets/img/remera-lacoste.jpg). Si tienes imágenes específicas, puedes reemplazarlas.
ID: Mantuve los id del 1 al 9 para simplicidad, pero si prefieres el formato del ejemplo (101, 102, 201, etc.), puedo ajustar los id para que sigan ese patrón. Por ejemplo, asignar 101, 102 para indumentaria, 201, 202 para accesorios, etc.
Precios y stock: Los valores de precio y stock se tomaron directamente del código original, pero los precios se convirtieron a números para evitar problemas en cálculos futuros.

Ejemplo con formato de ID como en el código proporcionado
Si prefieres que los id sigan el patrón del ejemplo (101, 102, etc., agrupados por categoría), aquí está una versión alternativa:
*/
export const productos = [
  { id: 101, nombre: "Remera Lacoste", descripcion: "Remera de lino, corte clásico.", categoria: "indumentaria", precio: 25000, stock: 3, img: "../assets/img/img/Lacoste.jpg "},
  { id: 102, nombre: "Remera Adidas", descripcion: "Remera holgada, ideal para deportes.", categoria: "indumentaria", precio: 15000, stock: 2, img: "../assets/img/remera-adidas.jpg" },
  { id: 103, nombre: "Buzo Puma", descripcion: "Buzo con capucha, tejido suave.", categoria: "indumentaria", precio: 20000, stock: 3, img: "../assets/img/buzo-puma.jpg" },
  { id: 104, nombre: "Gorra New Era", descripcion: "Gorra ajustable, diseño moderno.", categoria: "indumentaria", precio: 8000, stock: 6, img: "../assets/img/gorra-new-era.jpg" },
  { id: 201, nombre: "Reloj Casio", descripcion: "Reloj de plata, resistente al agua.", categoria: "accesorios", precio: 50000, stock: 1, img: "../assets/img/reloj-casio.jpg" },
  { id: 202, nombre: "Pulsera Dorada", descripcion: "Pulsera elegante de acero inoxidable.", categoria: "accesorios", precio: 10000, stock: 5, img: "../assets/img/pulsera-dorada.jpg" },
  { id: 301, nombre: "Zapatillas Nike", descripcion: "Zapatillas deportivas, máxima comodidad.", categoria: "calzado", precio: 30000, stock: 4, img: "../assets/img/zapatillas-nike.jpg" },
  { id: 302, nombre: "Zapatillas Reebok", descripcion: "Zapatillas casuales, suela antideslizante.", categoria: "calzado", precio: 22000, stock: 2, img: "../assets/img/zapatillas-reebok.jpg" },
  { id: 401, nombre: "Bolso Adidas", descripcion: "Bolso deportivo con múltiples compartimentos.", categoria: "bolsos", precio: 24000, stock: 3, img: "../assets/img/bolso-adidas.jpg" }
];
