import handle from "./handle";
import listeners from "./listeners";

// Cria um objeto proxy para o roteador
const router = new Proxy(
  {},
  {
    // Intercepta o acesso às propriedades do objeto
    get(_, method) {
      // Se o método solicitado contém "handle", retorna a função `handle`
      if (/handle/.test(method)) {
        return handle;
      }

      // Para outros métodos, adiciona uma nova rota aos listeners
      return (path, page, name) => {
        const methodName = method.toUpperCase();
        listeners[methodName].push({ path, page, name });
      };
    },
  },
);

export default router;
