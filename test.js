let carModel = [
  { name: "ford", score: 1 },
  { name: "lexus", score: 1 },
  { name: "maserati", score: 1 },
  { name: "Volvo", score: 1 },
];

let ARR = { name: "lexus", score: 1 };

function AddSame(arr = ARR) {
  carModel.push(arr);

  carModel.forEach((e) => {
    if (carModel[carModel.length - 1].name == e.name) {
      e.score++;
    }
  });
  carModel.pop();
  console.log(carModel);
}

AddSame(ARR);
AddSame(ARR);
AddSame(ARR);
AddSame(ARR);
