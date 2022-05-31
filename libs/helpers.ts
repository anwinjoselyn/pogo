export const breadcrumbSetterNew = (data: any, desired: Array<any>) => {
  if (data) {
    const entity: { [key: string]: string } = {
      title: data.title,
      route: data.route,
    };
    desired.push(entity);
    if (data.children && data.children.length > 0) {
      breadcrumbSetterNew(data.children[0], desired);
    }
  }
  return desired;
};

export const filterInclude = (o: any, path: string) => {
  if (o.route === path) {
    delete o.children;
    return o;
  }
  if (path.indexOf(o.route) === 0 && o.children && o.children.length > 0) {
    return (o.children = o.children.filter((subRoute: any) =>
      filterInclude(subRoute, path)
    ));
  }
};

export const capitalize = (string = '') =>
  [...string]
    .map((char, index) => (index ? char.toLowerCase() : char.toUpperCase()))
    .join('');

export const chipColors: any = [
  '#c6ecae',
  '#fe5f55',
  '#89daff',
  '#659b5e',
  '#e36588',
  '#8c271e',
  '#f7ffe0',
];
