import extractArgs from "./extractArgs";
import extractBody from "./extractBody";
import extractParams from "./extractParams";
import findMatchingRoute from "./findMatchingRoute";

// Função principal que lida com a requisição
async function handle(request, env, ctx) {
  // Encontra a rota correspondente com base na requisição
  const { page, path } = findMatchingRoute(request);

  // Extrai o corpo da requisição
  await extractBody(request);

  // Extrai argumentos e parâmetros da requisição
  extractArgs(request);
  extractParams(request, path);

  // Retorna a página correspondente, passando a requisição, o ambiente e o contexto
  return page(request, env, ctx);
}

export default handle;
