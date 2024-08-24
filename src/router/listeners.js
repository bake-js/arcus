/**
 * Armazena as rotas e suas respectivas ações para cada método HTTP.
 *
 * @description
 * O objeto `listeners` é um registro das rotas configuradas para diferentes métodos HTTP
 * (como GET, POST, DELETE, PUT). Cada chave no objeto representa um método HTTP, e o valor
 * associado é um array que armazena as rotas definidas para esse método, juntamente com
 * as funções de callback que serão executadas quando a rota for correspondida.
 *
 * @example
 * // Adicionando uma rota para o método GET
 * listeners.GET.push({ path: '/users/:id', page: userProfilePage, name: 'userProfile' });
 *
 * // A rota será acionada quando um pedido GET corresponder ao caminho '/users/:id'
 *
 * @type {Object}
 * @property {Array<{ path: string, page: Function, name?: string }>} DELETE - Array de rotas para o método DELETE.
 * @property {Array<{ path: string, page: Function, name?: string }>} GET - Array de rotas para o método GET.
 * @property {Array<{ path: string, page: Function, name?: string }>} POST - Array de rotas para o método POST.
 * @property {Array<{ path: string, page: Function, name?: string }>} PUT - Array de rotas para o método PUT.
 */
const listeners = {
  DELETE: [],
  GET: [],
  POST: [],
  PUT: [],
};

export default listeners;
