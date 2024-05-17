//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
console.log(mainEl);

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

//Set the height subMenuEl element to be "100%".
subMenuEl.style.height ="100%";

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";


//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>DOM Manipulation</h1>.

mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>"

//Add a class of flex-ctr to mainEl.

mainEl[0].classList.toggle('flex-ctr')

//Part 2 : Creating a Menu Bar

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);

//Set the height of the topMenuEl element to be 100%.

topMenuEl.style.height = '100%';

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.

topMenuEl.classList.toggle('flex-around');

//Part 3 : Adding Menu Buttons

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  //Iterate over the entire menuLinks array and for each "link" object:
  menuLinks.forEach(link =>{
     console.log(link)
     let anchor = document.createElement("a");
     console.log(anchor);
     anchor.setAttribute("href",'#');
     anchor.textContent = link.text;
     console.log(link.text);
     topMenuEl.appendChild(anchor)
    
    });





