//This was originally the image at the top of 
//the page, but was replaced with a gif of itself 
//for more consistent performance 

let angle = 0;
let length = 150;
let countDotsFrame = 0;
let countDotsMax = 501;

function setup(){
    var canvas = createCanvas(350,350);
    canvas.parent('logoHolder');
}
function draw(){
    clear();
    background(255,255,255,0);
    let c = color(35,35,35,255);
    fill(c);
    noStroke();

    let countDots = 0;
    

    translate(width / 2, height / 2);

    // let avoidX = 75;
    // let avoidY = 75;

    let angleDelta = 0.05;
    let numThisRing = 10;
    count = 0;
    for (var spacing = 30; spacing < length; spacing += 10){
        numThisRing += 4;
        count++;
        for (var a = 0; a < PI * 2; a += PI * 2 / numThisRing){
            //cut off point and anim
            countDots++;
            if (countDots > countDotsFrame)
                break;

            // fade effect
                fill(color(35,35,35, countDots / 2));
            
            // calc ellipse postion
            let d = map(sin(angle + a * 8 + count), -1, 1, 1, 1.15);
            let offA = map(spacing, 20, 150, 0, PI / 16);
            ellipse(cos(a + offA) * spacing * d, sin(a - offA) * spacing * d, 5, 5);
        }
    }

    angle -= angleDelta;
    countDotsFrame += 10;
    if (countDotsFrame > countDotsMax)
        countDotsFrame = countDotsMax;
}
