const music_array = [
  {
    name: "A",
    mood: "Sad",
  },
  {
    name: "B",
    mood: "Sad",
  },
  {
    name: "Z",
    mood: "Sad",
  },
  {
    name: "C",
    mood: "Happy",
  },
  {
    name: "D",
    mood: "Happy",
  },
  {
    name: "F",
    mood: "Happy",
  },
  {
    name: "E",
    mood: "Engaged",
  },
  {
    name: "G",
    mood: "Engaged",
  },
  {
    name: "H",
    mood: "Engaged",
  },
];

const mood_array = [
  { mood: "Sad", color: "#88C0D0" },
  { mood: "Happy", color: "#A3BE8C" },
  { mood: "Engaged", color: "#B48EAD" },
];

const num_song = 2;

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
  head.innerText = "Here are what we found for you";
  const list = document.getElementById("song-list");

  shuffle(music_array);
  list.innerHTML = "";

  music_array
    .filter((e) => e.mood === mood)
    .slice(0, num_song)
    .forEach((e) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = e.name;
      tr.appendChild(td);
      list.append(tr);
    });
}
