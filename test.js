

    document.getElementById("list").addEventListener("click", (e) => {
      if (e.target.matches("li")) {
        console.log("Clicked on:", e.target.textContent);
      }
    });
