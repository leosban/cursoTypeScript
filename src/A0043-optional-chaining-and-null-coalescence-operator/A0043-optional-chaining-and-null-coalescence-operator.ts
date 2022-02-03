// Encadeamento opcional e operador de coalescência nula
// Evitará que tenhamos vários ifs no código

// Ex de tipo
type DocumentText = {
  title: string;
  text: string;
  date?: Date;
};

const textDocument: DocumentText = {
  title: 'The Title',
  text: 'The text',
  // date: new Date(),
};

// Impressão do encadeamento opcional
console.log(textDocument.date?.toDateString());

// Uso do operador de coalescencia nula
// No caso se o lado esquerdo da expressão não tiver valor ou for nulo, executará o lado direto
// da expressão
console.log(textDocument.date?.toDateString() ?? 'There is no data');
