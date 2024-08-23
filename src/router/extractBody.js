import body from "./body";

async function extractBody(request) {
  // Verifica se o método da requisição é POST ou PUT
  const isPostOrPut = /POST|PUT/i.test(request.method);

  // Verifica se o Content-Type do request é JSON
  const isJsonContent = /application\/json/i.test(
    request.headers.get("Content-Type"),
  );

  // Se ambas as condições forem verdadeiras, faz a leitura do corpo da requisição e atribui ao objeto 'body'
  if (isPostOrPut && isJsonContent) {
    Object.assign(body, await request.json());
  }
}

export default extractBody;
