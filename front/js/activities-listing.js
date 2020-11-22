const activity_array = [
  {
    activity: "Breathing",
    function: "#Calm down plz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
  enim ad minim veniam, quis nostrud exercitation ullamco laboris\
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\
  in reprehenderit in voluptate velit esse cillum",
  },
  {
    activity: "Music with Mood",
    function: "Lets relax",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
  enim ad minim veniam, quis nostrud exercitation ullamco laboris\
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\
  in reprehenderit in voluptate velit esse cillum",
  },
  {
    activity: "Exercise",
    function: "Move your body",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
  enim ad minim veniam, quis nostrud exercitation ullamco laboris\
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\
  in reprehenderit in voluptate velit esse cillum",
  },
  {
    activity: "Laughing",
    function: "Let's have some fun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
  enim ad minim veniam, quis nostrud exercitation ullamco laboris\
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\
  in reprehenderit in voluptate velit esse cillum",
  },
];

const num_activity = 2;

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
