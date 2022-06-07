const toys = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
{
    id: 2,
    name: "Galaxy",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4

},
{
    id: 3,
    name: "Trix",
    maker: "Samsung",
    operatingSystem: "SR20",
    price: 6000,
    weight: 8.4
}
]

for (const toy of toys) {
    if (toy.id === 2) {
        toy.weight = toy.weight + 45
        console.log(`the ${toy.name} is ${toy.price} ${toy.weight}`)
    }
}

/*for (const toy of toys) {
    let percentage= toy.price *.05
    toy.price = toy.price + percentage
    console.log(toy.price)
}*/

/*for (const toy of toys) {
    toy.weight = toy.weight + 4
    console.log(toy.weight)
}*/

/*for (const toy of toys) {
    console.log(`${toy.id} blah ${toy.name} ${toy.maker} ${toy.operatingSystem} ${toy.price} ${toy.weight}`)
}*/

/*for (const toy of toys) {
    console.log(`${toy.maker}`, toy.id)
}

const ello = {
    id:4,
    name:'nokia',
    maker: 'nintendo',
    operatingSystem: '53',
    price: .02,
    weight: 100
}
toys.push(ello)
console.log(toys)*/

