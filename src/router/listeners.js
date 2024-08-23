// Inicializa um objeto para armazenar os listeners de cada método HTTP
const listeners = {
  DELETE: [],
  GET: [],
  POST: [],
  PUT: [],
};

// Exporta o objeto listeners, que será usado para armazenar rotas e suas respectivas ações
export default listeners;
