      (function () {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const offset = 90;

        function setActiveLinkById(id) {
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
              const targetId = href.substring(1);
              if (targetId === id) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            }
          });
        }

        function onScroll() {
          const scrollPos = window.scrollY + offset;
          let currentId = sections.length ? sections[0].id : "";

          sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (scrollPos >= top && scrollPos < top + height) {
              currentId = section.id;
            }
          });

          if (currentId) {
            setActiveLinkById(currentId);
          }
        }

        navLinks.forEach((link) => {
          link.addEventListener("click", function () {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
              const id = href.substring(1);
              setActiveLinkById(id);
            }
          });
        });

        window.addEventListener("scroll", onScroll);
        window.addEventListener("load", onScroll);
      })();