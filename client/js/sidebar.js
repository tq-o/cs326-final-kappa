$(document).ready(function () {
  $("#sidebar").append(`
    <div id="dismiss">
      <i class="fas fa-arrow-left"></i>
    </div>

    <div class="sidebar-header">
        <h3>Menu</h3>
    </div>

    <ul class="list-unstyled components">
      <p>Welcome User's name</p>
      <li>
        <a href="activities">Activities Description</a>
      </li>
      <li>
        <a href="welcome">Welcome</a>
      </li>
      <li>
        <a href="breathe">Breathe</a>
      </li>
      <li>
        <a href="meme">Memes</a>
      </li>
      <li>
        <a href="musics">Musics</a>
      </li>
      <li>
        <a href="moodchart">Mood Chart</a>
      </li>
      <li>
        <a href="videos">Videos</a>
      </li>
    </ul>
  `);

  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#dismiss, .overlay").on("click", function () {
    $("#sidebar").removeClass("active");
    $(".overlay").fadeOut();
  });

  $("#sidebar-button").on("click", function () {
    $("#sidebar").addClass("active");
    $(".overlay").fadeIn();
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});
