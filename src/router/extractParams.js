import params from "./params";

function extractParams(request, path) {
  // Cria uma instância de URL para manipulação da URL da requisição
  const url = new URL(request.url);

  // Divide o caminho da rota (path) em partes, criando uma lista de segmentos
  const keys = path?.split("/");

  // Divide o caminho da URL da requisição em partes, criando uma lista de valores
  const values = url.pathname.split("/");

  // Itera sobre os segmentos do caminho e verifica se há parâmetros dinâmicos (iniciados com ':')
  keys?.forEach((key, i) => {
    if (/^:/.test(key)) {
      Reflect.set(params, key.slice(1), values[i]);
    }
  });
}

export default extractParams;
