// Fetch API

// then/ cath
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((resposta) => {
    resposta.json().then((dados) => console.log(dados)); // transforma em dados em json. metodo json é promesa leva tempo para converte usa then
  })
  .catch((erro) => {
    console.log(erro);
  });

//async/ await
//funciona da mesma maneira código de cima, mais de baixo menos cod. mais legivel
async function obterDadosDoCep() {
  try {
    const resposta = await fetch("https://viacep.com.br/ws/83820461/json/");
    const dados = await resposta.json();

    console.log(dados);
  } catch (erro) {
    console.log("BUUUUUUUm deu um erro", erro);
  } finally {
    console.log("Terminou a requisição");
  }
}

obterDadosDoCep();
