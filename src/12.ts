const randomTsCode = `
  import { ${randomTsFunctionName} } from '${randomPackageName}';
  
  const ${randomVariableName} = ${randomTsValue};
  
  function ${randomFunctionName}(arg: ${randomType}) {
    console.log('Hello, world!');
  }
`;

console.log(randomTsCode);
