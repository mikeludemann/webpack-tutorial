import './styles.css';

function component(){
  let element = document.createElement('div');
  let content = document.createTextNode('Welcome');

  element.appendChild(content);

  return element;
}

document.body.appendChild(component());