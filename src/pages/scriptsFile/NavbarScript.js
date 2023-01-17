let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    for(let i = 0; i < sidebar.length; i += 1) {
        sidebar.item(i).sidebar.toggle("remove");
    }
    menuBtnChange();//calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }

  /*document.getElementById("background-video").playbackRate = 1;*/
     /* componentDidMount () {
        const script = document.createElement("script");
        script.src = "./NavbarScript.js";
        script.async = false;
        document.body.appendChild(script);
    }

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);
    }*/