//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
//console.log(mainEl);

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
//console.log(topMenuEl);

//Set the height of the topMenuEl element to be 100%.

topMenuEl.style.height = '100%';

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.

topMenuEl.classList.toggle('flex-around');

//Part 3 : Adding Menu Buttons

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ];

  //Iterate over the entire menuLinks array and for each "link" object:
  menuLinks.forEach(link =>{
    // console.log(link)
     let anchor = document.createElement("a");
     //console.log(anchor);
     anchor.setAttribute("href",'#');
     anchor.textContent = link.text;
     //console.log(link.text);
     topMenuEl.appendChild(anchor)
    
    });

//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.  

let topMenuLinks = topMenuEl.querySelectorAll('a');
console.log("topmenu",topMenuLinks);

topMenuEl.addEventListener("click" , handleClick);

function handleClick(e){
    e.preventDefault();
    console.log("click");
    console.log(e);
    //console.log(e.target.localName);

    if(e.target.localName !== 'a'){
        return;    
    }
    //cache the clicked <a> element
    const clickedlink = e.target;
    console.log(clickedlink);
    //loop through all <a> element
    topMenuLinks.forEach((link) => {
        link.classList.remove("active");
    });
    clickedlink.classList.toggle("active");

    //----------------------------------------//
    //Part5 : Adding Submenu Interaction
    
    //Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
    // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    // Otherwise, set the CSS top property of subMenuEl to 0.
    // Hint: Caching the "link" object will come in handy for passing its subLinks array later.

    //     The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
    // Clear the current contents of subMenuEl.
    // Iterate over the subLinks array, passed as an argument, and for each "link" object:
    // Create an <a> element.
    // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    // Set the element's content to the value of the text property of the "link" object.
    // Append the new element to the subMenuEl.
    
    const clickedLinkObject = menuLinks.find((linkObject) => linkObject.text.toLowerCase() === clickedlink.textContent );
    
    //console.log(clickedLinkObject.subLinks);

    if(clickedLinkObject && clickedLinkObject.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubmenu(clickedLinkObject.subLinks);
    } else {
        subMenuEl.style.top = "0";
    }

    if(e.target.textContent === "about") {
        mainEl.innerHTML = "<h1>About</h1>"
    } else {
        mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`
    }

    console.log("Clicked link text: ", e.target.textContent);

    function buildSubmenu(subLinks) {
        subMenuEl.innerHTML = '';

        for(let link of subLinks) {
            let subLinkElement = document.createElement("a");
            subLinkElement.setAttribute("href" , link.href);
            subLinkElement.textContent = link.text;
            subMenuEl.appendChild(subLinkElement);
        }
    }

}




