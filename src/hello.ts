export function sayHello(name: string = 'World'): string {
  return `Hello, ${name}!`;
}

if (typeof require !== 'undefined' && require.main === module) {
  // eslint-disable-next-line no-console
  console.log(sayHello());
}
