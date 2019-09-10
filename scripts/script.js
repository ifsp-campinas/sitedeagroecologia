const insereMenu = () => {
  console.log("Criação do menu dinâmico");
  let menu = document.getElementById("menu");

  let menuItem = criaMenuItem('site ifsp','http://ifsp.edu.br');
  let tag_nav = document.createElement('nav');
  let tag_ul = document.createElement('ul');
  tag_nav.appendChild(ul);
  menu.appendChild(nav);


  // var newText = document.createTextNode(
  //   "This is dynamically added text!");
  // menu.appendChild(newText);
}


criaMenuItem = (nome, link) => {
  let tag_li = document.createElement('li');
  let tag_a = document.createElement('a');
  let atrib = document.createAttribute("href");
  atrib.value = link; 
  tag_a.setAttributeNode(atrib);
  tag_li.appendChild(tag_a)
  return li;
}

// <div>
//     <nav>
//       <ul>
//         <li><a href="menu1.html">Menu 1</a></li>
//         <li><a href="menu2.html">Menu 2</a></li>
//       </ul>
//     </nav>
//   </div>