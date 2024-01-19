//get busca varios usuarios
async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user", {
    headers: {
      "app-id": "65ab01cc642ea5c9f1fa4b43",
    },
  });
  const users = await resposta.json();

  console.log(users);
}

getUsers();
//get busca somente um usuario
async function getUser() {
  const resposta = await fetch(
    "https://dummyapi.io/data/v1/user/65ab07d936a73640d4ad5ab8",
    {
      method: "GET",
      headers: {
        "app-id": "65ab01cc642ea5c9f1fa4b43",
        "Content-Type": "application/json",
      },
    }
  );
  const user = await resposta.json();

  console.log(user);
}

getUser();

//criar usuario
async function createUser() {
  const userData = {
    firstName: "Valdemar_d",
    lastName: "Taborda_d",
    email: "valdema3@teste.com",
  };

  await fetch("https://dummyapi.io/data/v1/user/create", {
    method: "POST",
    headers: {
      "app-id": "65ab01cc642ea5c9f1fa4b43",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}

// createUser();
