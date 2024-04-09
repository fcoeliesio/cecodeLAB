function validarCelular(numeroCelular) {
    const regex = /[1-9]{11}/g;
    return regex.test(numeroCelular)
}

function validarTelefone(numeroTelefone) {
    const regex = /[1-9]{10}/g;
    return regex.test(numeroTelefone);
}

function validarNome(nome) {
    const nomeVazio = nome.trim().length === 0;
    const regex = /[^a-zA-Z0-9\s]+/g;
    return !regex.test(nome) && !nomeVazio;
}

function validarEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+)?\.([a-z]+)?)?$/
    return regex.test(email);
}

export const validacoes = {
    name: (nome) => validarNome(nome),
    email: (email) => validarEmail(email),
    telefone: (tel) => validarTelefone(tel),
    celular: (cel) => validarCelular(cel),
}