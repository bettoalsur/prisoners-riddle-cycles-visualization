let boxes = [];
let prisoners = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(25);
  for (let i = 0; i < 100 ; i++) {
    boxes[i] = i+1;
    prisoners[i] = i+1;
  }
  shuffleBoxes();
  
  let cycles = [];
  for (let current of prisoners) {
    let alreadyFound = false;
    for (let cycle of cycles) {
      if(cycle.includes(current)) {
        alreadyFound = true;
        break;
      }
    }
    if (!alreadyFound) {
      let newCycle = [];
      let lookIn = current;
      do {
        lookIn = boxes[lookIn-1];
        newCycle.push(lookIn)
      } while( lookIn != current )
      cycles.push(newCycle);
    }
  }
  
  let breakNum = 10;
  let maxLength = Math.max(...cycles.map(x=>x.length));
  let w = width/breakNum/2;
  textAlign(RIGHT,CENTER);
  textSize(w*0.8);
  noStroke();
  let dy = w/8;
  let dhu = 360/cycles.length;
  colorMode(HSB);
  cycles.forEach((cycle,index) => {
    fill(index*dhu,255,255);
    let dx = w;
    for(let i = 0; i < cycle.length; i++) {
      if (i%10 == 0 ) {
        dx = w;
        dy+=w; 
      }
      text(cycle[i],dx+w/2,dy);
      dx+=2*w
    }
    dy+=w/8;
  });
}

function shuffleBoxes() {
  boxes.sort(() => Math.random() - 0.5);
}