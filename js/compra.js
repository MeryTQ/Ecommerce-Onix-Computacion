const tuPedido = document.querySelector(".tuPedido")

const storage = JSON.parse(localStorage.getItem("carrito"));

// Render de "Tu pedido" //
storage.map(item => {
    const divItem = document.createElement("div");
    divItem.classList.add("divPedido")
    divItem.innerHTML = `
    <img src="${item.imagen}" alt=${item.titulo} width="60">
    <p>${item.titulo}</p>
    <p>x ${item.cantidad}</p>
    <p>${item.precio}</p>
    `
    tuPedido.append(divItem)
});

// Total de "Tu pedido" //
const totalPedido = document.querySelector(".totalPedido");
function totalFacturacion () {
    let total = 0;
    storage.forEach(p => {
        const precio = Number(p.precio.replace("$", " "));
        total = total + precio * p.cantidad;
    });
    totalPedido.innerHTML = `
    <b>Total: $${total}</b>
    `
}
totalFacturacion()

// Metodo de pago //
const metodo = document.querySelector("#metodo");
const metodoOption = document.querySelectorAll(".metodoOption");
const pagoInput = document.querySelectorAll(".pagoInput");

metodo.addEventListener("change", disableOption);

function disableOption () {
    console.log(metodo.value)
    if (metodo.value == "efectivo"){
        pagoInput.forEach(i => {
            i.removeAttribute("required");
            i.setAttribute("disabled", "");
        })
    } else if ((metodo.value == "credito") || (metodo.value == "debito")){
        pagoInput.forEach(o => {
            o.removeAttribute("disabled");
            o.setAttribute("required", "");
        })
    }
}

// Compra finalizada //
const finalizarCompra = document.querySelector("#finalizarCompra");

finalizarCompra.addEventListener("click", alertaFinal);

function alertaFinal (e) {
    e.preventDefault();
    swal({
        title: "Compra realizada",
        text: "Pedido: #01",
        icon: "success",
        button: "Ok"
    }).then(function() {
        window.location.href = "../index.html";
        localStorage.clear();
    })
}



