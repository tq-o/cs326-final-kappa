fetch(`/mood?username=${localStorage.getItem("username")}`, {
  method: "GET",
})
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
      let hap = data.happy === null ? 0 : data.happy;
      let sad = data.sad === null ? 0 : data.sad;
      let ang = data.angry === null ? 0 : data.angry;
      let disgust = data.disgust === null ? 0 : data.disgust;
      let fear = data.fear === null ? 0 : data.fear;
      let surp = data.surprise === null ? 0 : data.surprise;
      redraw();
      document.getElementById("happy").addEventListener("click", () => {
        ++hap;
        redraw();
      });
      document.getElementById("sad").addEventListener("click", () => {
        ++sad;
        redraw();
      });
      document.getElementById("angry").addEventListener("click", () => {
        ++ang;
        redraw();
      });
      document.getElementById("disgust").addEventListener("click", () => {
        ++disgust;
        redraw();
      });
      document.getElementById("fear").addEventListener("click", () => {
        ++fear;
        redraw();
      });
      document.getElementById("surprise").addEventListener("click", () => {
        ++surp;
        redraw();
      });
      function redraw() {
        fetch(
          `/mood?username=${localStorage.getItem(
            "username"
          )}&happy=${hap}&sad=${sad}&angry=${ang}&disgust=${disgust}&fear=${fear}&surprise=${surp}`,
          {
            method: "POST",
          }
        ).then(() => {
          let total = hap + sad + fear + disgust + ang + surp;
          if (total === 0) {
            document.getElementById("h").style.height = "0%";
            document.getElementById("sa").style.height = "0%";
            document.getElementById("f").style.height = "0%";
            document.getElementById("d").style.height = "0%";
            document.getElementById("a").style.height = "0%";
            document.getElementById("s").style.height = "0%";
          } else {
            document.getElementById("h").style.height =
              JSON.stringify((hap * 100) / total) + "%";
            document.getElementById("sa").style.height =
              JSON.stringify((sad * 100) / total) + "%";
            document.getElementById("f").style.height =
              JSON.stringify((fear * 100) / total) + "%";
            document.getElementById("d").style.height =
              JSON.stringify((disgust * 100) / total) + "%";
            document.getElementById("a").style.height =
              JSON.stringify((ang * 100) / total) + "%";
            document.getElementById("s").style.height =
              JSON.stringify((surp * 100) / total) + "%";
          }
        });
      }
    });
  })
  .catch((error) => console.log(error));
