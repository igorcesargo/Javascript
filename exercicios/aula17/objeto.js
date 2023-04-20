let amigo = []
console.log(typeof amigo)

let colega = {nome: 'José',
sexo: 'M',
 peso:85.4,
 engordar(p=0) {
    console.log('Engordou')
    this.peso += p
 }
}
colega.engordar(2)
console.log(`${colega.nome} pesa ${colega.peso}kg`)
