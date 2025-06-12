// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = "royalblue";
// ctx.fillRect (50, 50, 100, 100);

// ctx.beginPath();
// ctx.fillStyle = "tomato";
// ctx.arc (200, 200, 50, 0, Math.PI * 2)
// ctx.fill();


// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// //circle properties
// let x = 100;
// let y = 100;
// let radius = 30;
// let dx = 2;
// let dy = 2;

// function drawCircle(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
//     // draw circle
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2);
//     ctx.fillStyle = "royalblue";
//     ctx.fill();
//     ctx.closePath();

//     //update position

//     x = x + dx;
//     y = y + dy;

//     //check if circle hits the wall

//     if (x + radius > canvas.width || x - radius< 0){
//         dx = -dx;
//     }
//     if (y + radius > canvas.height || y - radius < 0){
//         dy = -dy;
//     }

//     requestAnimationFrame(drawCircle);
// }
// drawCircle();




const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let particles = [];

function createParticle(x, y){
    particles.push({
        x: x,
        y: y,
        size: Math.random() * 5 + 2,
        speedX: (Math.random()-0.5) *4 ,
        speedY: (Math.random()-0.5) *4,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
    });
}
    function updateParticle(){
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            //update particles
            particle.x = particle.x + particle.speedX;
            particle.y = particle.y + particle.speedY;

            //draw particles
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color
            ctx.fill();

            //check if particle hits the wall if it does remove it.
            if (particle.x > canvas.width || particle.x < 0 || particle.y > canvas.height || particle.y < 0){
                particles.splice(index, 1);
            }

        });
requestAnimationFrame(updateParticle);
    }

    updateParticle();


setInterval(() => {
    createParticle(canvas.width / 2, canvas.height / 2);
}, 100);