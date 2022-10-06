const pizzaUno = {
    id: '1',
    nombre: 'Pepperoni',
    ingredientes: ['Pepperoni, Salame, Tomate, Queso Muzzarella'],
    precio: 1100
}

const pizzaDos = {
    id: '2',
    nombre: 'Napolitana',
    ingredientes: ['Tomate, Queso Muzzarella, Anchoas, Alcaparras, Ajo, Aceite de Oliva'],
    precio: 1300
}

const pizzaTres = {
    id: '3',
    nombre: 'Margarita',
    ingredientes: ['Albahaca, Queso Muzzarella, Tomate Perita, Aceite de Oliva'],
    precio: 1200
}

const pizzaCuatro = {
    id: '4',
    nombre: 'Cuatro Quesos',
    ingredientes: ['Queso Mozzarella, Queso Azul, Queso Parmesano, Queso Provolone'],
    precio: 1450
}

const pizzaCinco = {
    id: '5',
    nombre: 'Anchoas',
    ingredientes: ['Rucula, Queso Muzzarella, Anchoas, Salsa'],
    precio: 1300
}

const pizzaSeis = {
    id: '6',
    nombre: 'Fugazzeta',
    ingredientes: ['Queso Muzzarella, Cebolla'],
    precio: 1500
}

const pizzaSiete = {
    id: '7',
    nombre: 'Veggie',
    ingredientes: ['Choclo, Cebolla, Pimiento, Anana, Champiñon'],
    precio: 1600
}

const arrayPizzas = [pizzaUno, pizzaDos, pizzaTres, pizzaCuatro, pizzaCinco, pizzaSeis, pizzaSiete];

arrayPizzas.forEach((e) => {
    if (e.id % 2 != 0) {
        console.log('Pizzas con id impar: ', e.nombre);
    }
});

console.log('');

const pizzasMenos600 = arrayPizzas.every((e) => {
    return e.precio < 600;
});

if (pizzasMenos600 != false) {
    console.log('Hay pizzas con un valor menor a $600');
}
else {
    console.log('No hay pizzas con un valor menor a $600');
}

console.log('');

arrayPizzas.forEach((e) => {
    console.log('Nombre de la Pizza: ', e.nombre);
    console.log('Precio: ', e.precio);
    console.log('Ingredientes: ')
    e.ingredientes.forEach((f) => console.log(f))

    console.log('');
});