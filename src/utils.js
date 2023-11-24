const propsNames = new Set(["id", "className", "textContent", "onclick"]);

export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  for (const name of Object.keys(props)) {
    if (propsNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  for (const child of children) {
    element.append(child);
  }
  return element;
}
