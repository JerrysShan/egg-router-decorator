export function trimController(str: string): string {
  const index = str.indexOf('Controller');
  const first = str[0];
  if (index > -1) {
    str = str.substring(0, index);
  }
  str = first.toLowerCase() + str.slice(1);
  return str;
}