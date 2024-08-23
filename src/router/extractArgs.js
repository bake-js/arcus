import args from "./args";

function extractArgs(request) {
  // Cria uma instância de URL para manipular facilmente a URL da requisição
  const url = new URL(request.url);

  // Extrai os parâmetros de busca (query string) da URL
  const searchParams = new URLSearchParams(url.search);

  // Itera sobre cada par chave-valor dos parâmetros de busca e os armazena no objeto 'args'
  for (const [key, value] of searchParams.entries()) {
    Reflect.set(args, key, value);
  }
}

export default extractArgs;
