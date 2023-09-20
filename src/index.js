let nomeDoUsuario = 'Machine Gun Funk'

let xpDoUsuario = 3333

let nivel;

switch(true){
    case xpDoUsuario <= 1000:
        nivel = 'Ferro';
        break
    case xpDoUsuario <= 2000:
        nivel = 'Bronze'
        break
    case xpDoUsuario <= 5000:
        nivel = 'Prata'
        break
    case xpDoUsuario <= 7000:
        nivel = 'Ouro'
        break
    case xpDoUsuario <= 8000:
        nivel = 'Platina'
        break
    case xpDoUsuario <= 9000:
        nivel = 'Ascendente'
        break
    case xpDoUsuario <= 10000:
        nivel = 'Imortal'
        break
    case xpDoUsuario >= 10001:
        nivel = 'Radiante'
        break
    default:
        console.log('O usuário não possui rank');
        break
}

console.log(`O Herói ${nomeDoUsuario} está no nível ${nivel}`);