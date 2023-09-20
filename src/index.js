let nomeDoUsuario = 'Machine Gun Funk'

let nivelDoUsuário = 3333

let nivel;

switch(true){
    case nivelDoUsuário <= 1000:
        nivel = 'Ferro';
        break
    case nivelDoUsuário <= 2000:
        nivel = 'Bronze'
        break
    case nivelDoUsuário <= 5000:
        nivel = 'Prata'
        break
    case nivelDoUsuário <= 7000:
        nivel = 'Ouro'
        break
    case nivelDoUsuário <= 8000:
        nivel = 'Platina'
        break
    case nivelDoUsuário <= 9000:
        nivel = 'Ascendente'
        break
    case nivelDoUsuário <= 10000:
        nivel = 'Imortal'
        break
    case nivelDoUsuário >= 10001:
        nivel = 'Radiante'
        break
    default:
        console.log('O usuário não possui rank');
        break
}

console.log(`O Herói ${nomeDoUsuario} está no nível ${nivel}`);