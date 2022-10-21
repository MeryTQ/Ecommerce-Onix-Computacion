
// ---------- PRODUCTOS ---------- //
class plantillaProductos{
    constructor(id, tipo, nombre, precio, imagen){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let productosArray = []

productosArray.push(new plantillaProductos(1, "Cooler", "Cooler Cpu Cooler Master Hyper 212 Argb 150 W",8289, "../assets/Componentes/Cooler/Cooler-Master-1.png"));
productosArray.push(new plantillaProductos(2, "Cooler", "Cooler Cpu Cooler Master MasterAir MA410M Argb 150 W", 16499, "../assets/Componentes/Cooler/Cooler-Master-2.png"));
productosArray.push(new plantillaProductos(3, "Cooler", "Cooler Cpu Cooler Master Masterair MA620M Argb 200 W", 28799, "../assets/Componentes/Cooler/Cooler-Master-3.png"));
productosArray.push(new plantillaProductos(4, "Disco", "Disco Rigido 1Tb WD Blue", 8599, "../assets/Componentes/Disco rigido/Disco-Wd-1.png"));
productosArray.push(new plantillaProductos(5, "Disco", "Disco Rigido 4Tb WB Blue", 18999, "../assets/Componentes/Disco rigido/Disco-Wd-2.png"));
productosArray.push(new plantillaProductos(6, "Fuente", "Fuente Thermaltake Smart 500W 80 Plus White", 9399, "../assets/Componentes/Fuente/Fuente-Therma-1.png"));
productosArray.push(new plantillaProductos(7, "Fuente", "Fuente Thermaltake Smart Rgb 600W 80 Plus White", 17749, "../assets/Componentes/Fuente/Fuente-Therma-2.png"));
productosArray.push(new plantillaProductos(8, "Fuente", "Fuente Thermaltake Smart BX1 Rgb 750 80 Plus Bronze", 25999, "../assets/Componentes/Fuente/Fuente-Therma-3.png"));
productosArray.push(new plantillaProductos(9, "Gabinete", "Gabinete Mig Tower Kanji Z399 Rgb Vidrio Templado 4 Fan", 12959, "../assets/Componentes/Gabinete/Gabinete 1.png"));
productosArray.push(new plantillaProductos(10, "Gabinete", "Gabinete Mid Tower Essenses Bze 40 Rgb Vidrio Templato 3 Fan", 9999, "../assets/Componentes/Gabinete/Gabinete 2.png"));
productosArray.push(new plantillaProductos(11, "Gabinete", "Gabinete Mid Tower Level Up Andromeda Rgb", 12699, "../assets/Componentes/Gabinete/Gabinete 3.png"));
productosArray.push(new plantillaProductos(12, "Motherboard", "Motherboard 1200 11Gen - Asus Prime H510H-E", 17279, "../assets/Componentes/Motherboard/Mother-Asus-1.png"));
productosArray.push(new plantillaProductos(13, "Motherboard", "Motherboard 1200 11Gen - Gigabyte GA-Z590M GAMING X", 23999, "../assets/Componentes/Motherboard/Mother-Giga-1.png"));
productosArray.push(new plantillaProductos(14, "Motherboard", "Motherboard AM4 - Msi B550M PRO VDH WIFI", 26899, "../assets/Componentes/Motherboard/Mother-Msi-1.png"));
productosArray.push(new plantillaProductos(15, "Placa de video", "Placa de Video GeForce GTX 1660 6Gb Super Asus Tuf Gaming Oc Dos Cooler", 88299, "../assets/Componentes/Placa de video/Video-Asus-1.png"));
productosArray.push(new plantillaProductos(16, "Placa de video", "Placa de Video Radeon RX 6500 XT 4Gb Gigabyte Eagle", 67589, "../assets/Componentes/Placa de video/Video-Giga-1.png"));
productosArray.push(new plantillaProductos(17, "Placa de video", "Placa de Video LHR GeForce RTX 2070 8Gb Msi Ventus 2X OC", 177169, "../assets/Componentes/Placa de video/Video-Msi-2.png"));
productosArray.push(new plantillaProductos(18, "Procesador", "Procesador Intel Core i7 10700F 4.8 Ghz Comet Lake 1200 Sin Gpu", 59999, "../assets/Componentes/Procesadores/Intel i7.png"));
productosArray.push(new plantillaProductos(19, "Procesador", "Procesador Intel Core i9 12900KF 5.2 Ghz Alder Lake 1700 Sin Cooler Sin Gpu", 139799, "../assets/Componentes/Procesadores/Intel i9.png"));
productosArray.push(new plantillaProductos(20, "Procesador", "Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Gpu", 69999, "../assets/Componentes/Procesadores/Ryzen 7.png"));
productosArray.push(new plantillaProductos(21, "Procesador", "Procesador Amd Ryzen 9 5900X 4.8 Ghz - AM4 Sin Cooler Sin Gpu", 90989, "assets/Componentes/Procesadores/Ryzen 9.png"));
productosArray.push(new plantillaProductos(22, "Ram", "Memoria Ram DDR4 - 4Gb 3200 Mhz Beast Kingston Fury", 8899, "../assets/Componentes/Ram/Ram-Fury-1.png"));
productosArray.push(new plantillaProductos(22, "Ram", "Memoria Ram DDR5 - 8Gb 5600 Mhz Beast Kingston Fury Rgb", 15299, "../assets/Componentes/Ram/Ram-Fury-2.png"));
productosArray.push(new plantillaProductos(23, "Ram", "Memoria Ra DDR5 - 16Gb 5200 Mhz Beast Kingston Fury", 26989, "../assets/Componentes/Ram/Ram-Fury-3.png"));
productosArray.push(new plantillaProductos(24, "Auriculares", "Auricular Gamer HyperX Cloud Stringer Rojo", 8699, "../assets/Perifericos/Hyperx/Auriculares-Hyper-1.png"));
productosArray.push(new plantillaProductos(25, "Auriculares", "Auricular Gamer HyperX Cloud Alpha Rojo", 17999, "../assets/Perifericos/Hyperx/Auriculares-Hyper-2.png"));
productosArray.push(new plantillaProductos(26, "Auriculares", "Auricular Gamer HyperX Cloud Flight Inalámbrico", 20689, "../assets/Perifericos/Hyperx/Auriculares-Hyper-3.png"));
productosArray.push(new plantillaProductos(27, "Mouse", "Mouse Gamer HyperX Pulsefire Raid Rgb", 5799, "../assets/Perifericos/Hyperx/Mouse-Hyper-1.png"));
productosArray.push(new plantillaProductos(28, "Mouse", "Mouse Gamer HyperX Pulsefire Haste Ultra Ligero", 7189, "../assets/Perifericos/Hyperx/Mouse-Hyper-2.png"));
productosArray.push(new plantillaProductos(29, "Mouse", "Mouse Gamer HyperX Pulsefire Surge Rgb", 7499, "../assets/Perifericos/Hyperx/Mouse-Hyper-3.png"));
productosArray.push(new plantillaProductos(30, "Teclado", "Teclado Gamer HyperX Alloy Core Rgb", 5099, "../assets/Perifericos/Hyperx/Teclado-Hyper-1.png"));
productosArray.push(new plantillaProductos(31, "Teclado", "Teclado Gamer HyperX Alloy Origins Core Tenkeyless", 16579, "../assets/Perifericos/Hyperx/Teclado-Hyper-2.png"));
productosArray.push(new plantillaProductos(32, "Teclado", "Teclado Gamer HyperX Alloy Elite 2 Rgb", 19989, "../assets/Perifericos/Hyperx/Teclado-Hyper-3.png"));


// ---------- GENERADOR DE PRODUCTOS/CARDS EN HTML ---------- //

for (const productoArray of productosArray){
    const productosDiv = document.createElement("div");
    productosDiv.innerHTML = `
    <p class="productoNombre">${productoArray.nombre}</p> 
    <div class="productoImgDiv"><img src="${productoArray.imagen}" alt="${productoArray.tipo}" class="productoImg"></div>
    <div>
        <input type="button" value="añadir" class="botonAñadir" id="${productoArray.id}">
        <p class="productoPrecio">$${productoArray.precio}</p> 
    </div>`;

    const appendDiv = document.getElementById("productos");
    appendDiv.append(productosDiv);
    productosDiv.classList = "productosCard wow animate__animated animate__fadeIn";
}

// ---------- AÑADIR ITEMS AL CARRITO ---------- //

const botonAñadir = document.querySelectorAll(".botonAñadir");
const carritoDiv = document.querySelector(".carritoDiv");
const carritoTitulo = document.querySelector(".carritoTitulo h2");
const sad = document.querySelector(".sad");
let carrito = [];

botonAñadir.forEach(btn => {
    btn.addEventListener("click", AñadirCarrito);
});

function AñadirCarrito(e){
    const button = e.target;
    const item = button.closest(".productosCard");
    const itemNombre = item.querySelector(".productoNombre").textContent;
    const itemPrecio = item.querySelector(".productoPrecio").textContent;
    const itemImg = item.querySelector(".productoImg").src;
    
    const nuevoItem = {
        titulo: itemNombre,
        imagen: itemImg,
        precio: itemPrecio,
        cantidad: 1
    }

    añadirItem(nuevoItem);
}

function añadirItem(nuevoItem){
    // Evitar render duplicado - Aumenta la cantidad en el input //
    const inputNumber = document.getElementsByClassName("inputNumber");
    for (let i = 0; i < carrito.length; i += 1){
        if (carrito[i].titulo === nuevoItem.titulo){
            carrito[i].cantidad ++;
            const inputValor = inputNumber[i];
            inputValor.value ++;
            carritoTotal();
            return null;
        }
    }
    carrito.push(nuevoItem);
    renderCarrito();
}

function renderCarrito(){
    carritoDiv.innerHTML = "";
    carritoTitulo.innerText = "Tu carrito"
    sad.innerHTML = "";
    carrito.map(item =>{
        const divRender = document.createElement("div");
        divRender.classList.add("carritoItems");
        const contenidoRender = `
            <img src=${item.imagen} alt="${item.titulo}" width="60px">
            <p class="titulo">${item.titulo}</p>
            <p>${item.precio}</p>
            <div> <input type="number" min="1" value=${item.cantidad} class="inputNumber"> </div>
            <div id="quitarItem"><button><i class="fa-solid fa-minus fa-xs"></i></button></div> 
        `
        divRender.innerHTML = contenidoRender;
        carritoDiv.appendChild(divRender);
        divRender.querySelector("#quitarItem").addEventListener("click", quitarItem);
        divRender.querySelector(".inputNumber").addEventListener("change", incrementarItems);
    })
    carritoTotal();
}

// Carrito Total //
function carritoTotal(){
    let total = 0;
    const itemTotal = document.querySelector(".total");
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", " "))
        total = total + precio * item.cantidad;
    })
    itemTotal.innerHTML = `
        <p> TOTAL : $ ${total} </p>
        <div class="quitarPagar"> <input type="button" value="PAGAR"> </div> 
    `;
    addLocalStorage();
}

// Quitar items //
function quitarItem(){
    const divItems = document.querySelector(".carritoItems");
    const titulo = divItems.querySelector(".titulo").textContent;
    for ( let i = 0; i < carrito.length; i +=1){
        if (carrito[i].titulo === titulo){
            carrito.splice(i, 1);
        }
    }
    divItems.remove();
    carritoTotal();
    quitarPagar();
}

function quitarPagar(){
    const quitarPagar = document.querySelector(".quitarPagar");
    if (carrito == !carrito){
        quitarPagar.innerHTML = ``;
    }
}

// Incrementar items //
function incrementarItems(e){
    const suma = e.target;
    const divItems = suma.closest(".carritoItems")
    const titulo = divItems.querySelector(".titulo").textContent;
    carrito.forEach(item => {
        if(item.titulo === titulo){
            // Evitar que se ingrese una cantidad < 1 //
            if (suma.value < 1){
                suma.value = 1;
            } else{
                suma.value;
            }
            item.cantidad = Number(suma.value);
            carritoTotal();
        }
    })
}

// ---------- LOCAL STORAGE ---------- //
function addLocalStorage () {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const storage = JSON.parse(localStorage.getItem("carrito"));
if (storage){
    carrito = storage;
    renderCarrito();
}

