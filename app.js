const nav = document.querySelector("nav")
        const openNav = document.querySelector(".openNav")
        const closeNav = document.querySelector(".closeNav")

        function hamburger(){
          nav.classList.add("active")
          openNav.classList.add("add")
          closeNav.classList.add("close")
        }
        function Close(){
          nav.classList.remove("active")
          openNav.classList.remove("add")
          closeNav.classList.remove("close")
          
        }