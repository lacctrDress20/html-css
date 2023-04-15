const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwtich = body.querySelector(".mode"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      modeSwtich.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });
