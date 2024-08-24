import handle from "./handle";
import listeners from "./listeners";

/**
 * Proxy que gerencia o roteamento de requisições.
 *
 * @description
 * Este objeto `router` utiliza um `Proxy` para interceptar chamadas de métodos. Ele permite
 * o registro de rotas associadas a métodos HTTP (GET, POST, etc.) e suas respectivas funções
 * de tratamento (`page`). O `Proxy` intercepta os métodos chamados e delega a lógica de roteamento
 * apropriada.
 *
 * @example
 * // Registra uma rota GET para a página inicial
 * router.get("/home", homePageHandler, "homeRoute");
 *
 * // Registra uma rota POST para submissão de formulário
 * router.post("/submit", submitHandler, "submitRoute");
 *
 * @typedef {Object} Router
 * @property {Function} get - Registra uma rota para o método GET.
 * @property {Function} post - Registra uma rota para o método POST.
 * @property {Function} put - Registra uma rota para o método PUT.
 * @property {Function} delete - Registra uma rota para o método DELETE.
 */
const router = new Proxy(
  {},
  {
    get(_, method) {
      // Se o método solicitado for "handle", retorna a função `handle`
      if (/handle/.test(method)) {
        return handle;
      }

      // Registra uma rota no listener do método HTTP correspondente
      return (path, page, name) => {
        const methodName = method.toUpperCase();
        if (!listeners[methodName]) {
          throw new Error(`Método HTTP não suportado: ${methodName}`);
        }

        // Adiciona a nova rota à lista de listeners
        listeners[methodName].push({ path, page, name });
      };
    },
  },
);

export default router;
