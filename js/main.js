
// ---------- VARIABLES / CONSTANTES ---------- //
const productos = document.querySelector("#productos");
const carritoDiv = document.querySelector(".carritoDiv");
const carritoTitulo = document.querySelector(".carritoTitulo h2");
const sad = document.querySelector(".sad");
const itemTotal = document.querySelector(".total");

// ---------- GENERADOR DE PRODUCTOS/CARDS EN HTML ---------- //

fetch("../json/data.json")
.then((res) => res.json())
.then((data) => {
    for (const productoData of data){
        const productosDiv = document.createElement("div");
        productosDiv.innerHTML = `
        <p class="productoNombre">${productoData.nombre}</p> 
        <div class="productoImgDiv"><img src="${productoData.imagen}" alt="${productoData.tipo}" class="productoImg"></div>
        <div>
            <input type="button" value="añadir" class="botonAñadir">
            <p class="productoPrecio">$${productoData.precio}</p> 
        </div>
        `
        productos.append(productosDiv);
        productosDiv.classList = "productosCard wow animate__animated animate__fadeIn";
        const botonAñadir = document.querySelectorAll(".botonAñadir");
        // Evento Añadir al carrito //
        botonAñadir.forEach(btn => {
        btn.addEventListener("click", AñadirCarrito);
        });
    } 
}) 

// ---------- AÑADIR ITEMS AL CARRITO ---------- //
let carrito = [];

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
    Toastify({
        text: "¡Producto Añadido!",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "orange",
            color: "black",
        }
    }).showToast();
    contadorCarrito();
}

// Contador carrito //
const contador = document.querySelector(".contador");
function contadorCarrito (){
    let cuenta = 0;
    carrito.forEach((c) => {
        let cantContador = Number(c.cantidad);
        cuenta = cuenta + cantContador;
        contador.innerHTML = `
        <p class="contadorNumero">${cuenta}</p>
        `
        if (carrito.leng == 0){
            cuenta = 0;
        }
    });
    if (carrito.length > 0){
        contador.style.display = "block"
    } else if (carrito.length == 0){
        contador.style.display = "none";
    }
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
            <div><button><i class="fa-solid fa-minus fa-xs" id="quitarItem"></i></button></div> 
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
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", " "))
        total = total + precio * item.cantidad;
    })
    itemTotal.innerHTML = `
        <p> TOTAL : $ ${total} </p>
        <div class="pagar"> <a href="./html/compra.html"> <input type="button" value="PAGAR"> </a> </div> 
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
    if (carrito.length == 0){
        const pagar = document.querySelector(".pagar");
        localStorage.clear();
        carritoTitulo.innerHTML = "Carrito vacío"
        pagar.innerHTML ="";
        sad.innerHTML = `<i class="fa-regular fa-face-sad-tear fa-xl"></i>`;
        contador.innerHTML = "";
    }
    Toastify({
        text: "¡Producto eliminado!",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "red",
            color: "black",
        }
    }).showToast();
    contadorCarrito();
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
            contadorCarrito();
        }
    })
}

// ---------- LOCAL STORAGE ---------- //
function addLocalStorage () {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("contador", JSON.stringify(contador));
}

const storage = JSON.parse(localStorage.getItem("carrito"));
if (storage){
    carrito = storage;
    renderCarrito();
    contadorCarrito();
}

// ---------- CATEGORIAS - FILTRO ---------- //
const inputFiltro = document.querySelectorAll(".filtro");

// Añadir filtro//
fetch("./json/data.json")
.then((res) => res.json())
.then((data) => {
    inputFiltro.forEach(añadir => {
    añadir.addEventListener("click", añadirFiltro);
    function añadirFiltro () {
        const arrayFiltrado = data.filter(e => e.tipo.includes(añadir.value));
        productos.innerHTML = "";
        // Render filtro //
        for (const renderFiltro of arrayFiltrado){
            const divFiltro = document.createElement("div");
            divFiltro.innerHTML = `
            <p class="productoNombre">${renderFiltro.nombre}</p> 
            <div class="productoImgDiv"><img src="${renderFiltro.imagen}" alt="${renderFiltro.tipo}" class="productoImg"></div>
            <div>
                <input type="button" value="añadir" class="botonAñadir" id="${renderFiltro.id}">
                <p class="productoPrecio">$${renderFiltro.precio}</p> 
            </div>`;
            productos.append(divFiltro);
            divFiltro.classList = "productosCard wow animate__animated animate__fadeIn";
        }
        // añadir al carrito //
        const carritoFiltrado = document.querySelectorAll(".botonAñadir");
        carritoFiltrado.forEach(a => {
        a.addEventListener("click", AñadirCarrito);
        })
    }
});
})

// ---------- BUSCADOR ---------- //
const buscador = document.querySelector("#buscador"); 
const articulo = document.querySelectorAll(".articulo");
const buscarLista = document.querySelector(".buscarLista");

buscador.addEventListener("keyup", iniciarBusqueda);

function iniciarBusqueda (e) {
    if (e.target){
        articulo.forEach(art => {
            art.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) 
            ? art.style.display = "block"
            : art.style.display = "none"
        })
    } // Mostrar resultados //
    if (buscador.value.length > 0){
        buscarLista.style.display = "block";
    } else {
        buscarLista.style.display = "none";
    }
}

// Seleccionar busqueda //
fetch("./json/data.json")
.then((res) => res.json())
.then((data) => {
    articulo.forEach(art => {
        art.addEventListener("click", seleccionarBusqueda);
        function seleccionarBusqueda () {
            const busquedaFiltrada = (data.filter(b => b.tipo.includes(art.textContent) || b.nombre.includes(art.textContent)));
            productos.innerHTML = "";
    
            for (renderBusqueda of busquedaFiltrada) {
                const divBusqueda = document.createElement("div");
                divBusqueda.innerHTML = `
                <p class="productoNombre">${renderBusqueda.nombre}</p> 
                <div class="productoImgDiv"><img src="${renderBusqueda.imagen}" alt="${renderBusqueda.tipo}" class="productoImg"></div>
                <div>
                    <input type="button" value="añadir" class="botonAñadir">
                    <p class="productoPrecio">$${renderBusqueda.precio}</p> 
                </div>`;
                productos.append(divBusqueda);
                divBusqueda.classList = "productosCard wow animate__animated animate__fadeIn";
                buscarLista.style.display = "none";
            }
            const carritoFiltrado = document.querySelectorAll(".botonAñadir");
            carritoFiltrado.forEach(a => {
            a.addEventListener("click", AñadirCarrito);
            });
    

        }
    })
})


