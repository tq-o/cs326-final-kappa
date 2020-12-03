const music_array = [
  {
    name: "White Mustang - Lana Del Rey",
    mood: "Sad",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331983187&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "you broke me first - Tate McRae",
    mood: "Sad",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/798660295&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Grenade - Bruno Mars",
    mood: "Sad",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271221115&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Go big or go home - American Authors",
    mood: "Happy",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213133041&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Thunder - Imagine Dragons",
    mood: "Happy",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/361939553&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Trololo Song - Mr.Trololo",
    mood: "Happy",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254220736&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Shatter Me - Lindsey Stirling",
    mood: "Engaged",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/140760102&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Pachelbel Canon in D - Solo Piano",
    mood: "Engaged",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/29503310&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    name: "Hall of Fame - TheScript (feat. will.i.am)",
    mood: "Engaged",
    l: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/270519066&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
];

const mood_array = [
  { mood: "Sad", color: "#88C0D0" },
  { mood: "Happy", color: "#A3BE8C" },
  { mood: "Engaged", color: "#B48EAD" },
];

const num_song = 1;

function shuffle(array) {
  let m = array.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    const t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Create all the mood button
const moods = document.getElementById("mood-list");

mood_array.forEach((e) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const b = document.createElement("button");
  b.style = `background:${e.color}`;
  b.type = "button";
  b.classList.add("btn");
  b.innerText = e.mood;
  b.addEventListener("click", function () {
    updatePlaylist(b.innerText);
  });
  td.appendChild(b);
  tr.appendChild(td);
  moods.append(tr);
});

function updatePlaylist(mood) {
  const head = document.getElementById("song-list-head");
  head.innerText = "Here is what we found for you";
  const list = document.getElementById("song-list");
  list.innerHTML = "";

  shuffle(music_array);

  music_array
    .filter((e) => e.mood === mood)
    .slice(0, num_song)
    .forEach((e) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = e.name;
      tr.appendChild(td);
      list.append(tr);
      document.getElementById("here").src = e.l;
    });
    
}
