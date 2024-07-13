document.addEventListener('DOMContentLoaded', function() {
    let productos = [];

    function agregarProducto() {
        let producto = prompt('Ingrese el nombre del producto:');
        let precio = parseFloat(prompt('Ingrese el precio del producto:'));
        let cantidad = parseInt(prompt('Ingrese la cantidad del producto:'));
        if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
            console.log('Por favor, ingrese valores válidos para el precio y la cantidad.');
        } else {
            let nuevoProducto = {
                producto: producto,
                precio: precio,
                cantidad: cantidad
            };
            productos.push(nuevoProducto);
            console.log('Producto agregado exitosamente.');
        }
    }

    function mostrarProductos() {
        if (productos.length === 0) {
            console.log('No hay productos en la lista.');
        } else {
            console.log('Productos:');
            for (let i = 0; i < productos.length; i++) {
                console.log(`${productos[i].producto} - Precio: $${productos[i].precio} - Cantidad: ${productos[i].cantidad}`);
            }
        }
    }

    function calcularCostoTotal() {
        if (productos.length === 0) {
            console.log('No hay productos en la lista.');
        } else {
            let costoTotal = 0;
            for (let i = 0; i < productos.length; i++) {
                costoTotal += productos[i].precio * productos[i].cantidad;
            }
            console.log(`Costo Total: $${costoTotal.toFixed(2)}`);
        }
    }

    function reiniciarProductos() {
        productos = [];
        console.log('Lista de productos reiniciada.');
    }

    function finalizar() {
        mostrarProductos();
        calcularCostoTotal();
        console.log('Programa finalizado.');
    }

    let continuar = true;

    while (continuar) {
        let opcion = prompt('Seleccione una opción:\n1. Agregar Producto\n2. Mostrar Productos\n3. Calcular Costo Total\n4. Reiniciar Productos\n5. Finalizar');
        if (opcion === '1') {
            agregarProducto();
        } else if (opcion === '2') {
            mostrarProductos();
        } else if (opcion === '3') {
            calcularCostoTotal();
        } else if (opcion === '4') {
            reiniciarProductos();
        } else if (opcion === '5') {
            finalizar();
            continuar = false;
        } else {
            console.log('Opción no válida, por favor seleccione nuevamente.');
        }
    }
});