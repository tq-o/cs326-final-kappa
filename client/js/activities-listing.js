const activity_array = [
  {
    activity: "Breathing",
    function: "Let's breathe in and out",
    description:
      "Take a moment, sit back down, and follow the rythm. Breathing is important. Don't forget to breathe!",
  },
  {
    activity: "Music with Mood",
    function: "Lets relax with music",
    description:
      "Want some music? We got your back! You will love our suggestions!",
  },
  {
    activity: "Laughing",
    function: "Let's have some fun with memes",
    description:
      "Meme is never dying out. We ahve some of the best for you right here to brighten up your day!",
  },
  {
    activity: "Watching",
    function: "Let's chill with some relaxing videos",
    description:
      "Need some thing light to pass by the time? Why not try some videos. It works, as always.",
  }
];

const num_activity = 3;

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

shuffle(activity_array);

const list = document.getElementById("a-body");
list.innerHTML = "";

let cnt = 0;
activity_array.slice(0, num_activity).filter((e) => {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.scope = "row";
  th.innerText = ++cnt;
  const a = document.createElement("td");
  a.innerText = e.activity;
  const f = document.createElement("td");
  f.innerText = e.function;
  const d = document.createElement("td");
  d.innerText = e.description;
  tr.appendChild(th);
  tr.appendChild(a);
  tr.appendChild(f);
  tr.appendChild(d);
  list.append(tr);
});
