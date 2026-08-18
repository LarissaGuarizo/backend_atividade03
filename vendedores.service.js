const vendedores = require("./mockup.vendedores");
const cadastrar = (matricula, nome, salario, comissao) => {
    let vendedor = {
        matricula,
        nome,
        salario,
        comissao
    };

    vendedores.push(vendedor);
};

const listar = () => {
    vendedores.forEach((vendedor, indice) => {
        console.log(indice, vendedor);
    });
};

const buscar = (buscar) => {
    let resultado = [];

    vendedores.forEach((vendedor) => {
        if (JSON.stringify(vendedor).toLowerCase().includes(buscar.toLowerCase())) {
            resultado.push(vendedor);
        }
    });

    //return resultado;
    console.log(resultado);
};

const excluir = (matricula) => {
    vendedores.splice(matricula, 1);
};

const buscarPorMatricula = (matricula) => {
    let resultado = [];

    vendedores.forEach((vendedor) => {
        if (vendedor.matricula == matricula) {
            let resultado = vendedores.push(vendedor);
        };
    });
}

const buscarPorNome = (nome) => {
    let resultado = [];

    vendedores.forEach((vendedor) => {
        if (vendedor.nome == nome) {
            let resultado = vendedores.push(vendedor);
        };

    });

    console.log(resultado);
};

cadastrar(12589, "Tiago", 2500, 100);
// listar();
buscar("257348");
excluir(1);
listar();