function adjustCanvasHeight() {
    let home = document.getElementById('home').getBoundingClientRect();
    const homeHeight = home.height;
    const homeWidth = home.width;
    let canvas = document.getElementById('background');
    const height = document.body.scrollHeight
    const width = document.body.scrollWidth;
    canvas.height = height;
    canvas.width = width;
    if (!canvas.getContext) return
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(width / 3, 0);
    ctx.lineTo(0, homeHeight / 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, homeHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width, homeHeight * 2 / 3);
    ctx.lineTo((width * 2 / 3) * 1.25, (homeHeight * 2 / 3) * 1.25);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width / 3 / 2, homeHeight / 3 / 2, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width / 3 / 2, homeHeight / 3 / 2, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#303030";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc((width * 2 / 3) * 1.25, (homeHeight * 2 / 3) * 1.25, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc((width * 2 / 3) * 1.25, (homeHeight * 2 / 3) * 1.25, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#303030";
    ctx.fill();
    ctx.stroke();

    let work = document.getElementById('works').getBoundingClientRect();
    const workY = homeHeight;
    const workHeight = work.height;
    const workWidth = work.width;
    // Golden Ratio
    for (let i = 7; i > 0; i--) {
        const x = i * 35;
        const y = (8 - i) * 6;
        ctx.beginPath();
        ctx.moveTo(5 + x, homeHeight + 160);
        ctx.lineTo(10 + x, homeHeight + 160);
        ctx.lineTo(15 + x, homeHeight + 180);
        ctx.lineTo(15 + x, homeHeight + 150 - y);
        ctx.lineTo(40 + (7 * 35), homeHeight + 150 - y);
        ctx.stroke();

        ctx.font = `18px Arial`;
        ctx.fillStyle = '#303030';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('1+', 28 + x, homeHeight + 170);
    }
    drawSpiral(ctx, width-100, workY+workHeight-100)

    
    // blog
    let blog = document.getElementById('blogs').getBoundingClientRect();
    const blogHeight = blog.height;
    const blogy = homeHeight + workHeight;

    ctx.strokeStyle = "#303030";
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(0, blogy+20);
    ctx.lineTo(width, blogy+20);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(0, blogy+32);
    ctx.lineTo(width, blogy+32);
    ctx.stroke();

    const bars = [
        [1, 20, 2], // 1
        [1, 12, 6], // 2
        [0, 20, 6], // 3
        [1, 12, 5], // 4
        [1, 2, 4], // 5
        [0, 18, 4], // 6
        [1, 2, 6], // 7
        [1, 20, 10], // 8
        [1, 24, 12], // 9
        [1, 30, 2], // 10
    ]

    let x = width - 100;
    let y = homeHeight + workHeight + blogHeight - 150;
    ctx.lineWidth = 2;
    ctx.fillStyle  = "#303030";
    ctx.strokeStyle = "#303030";
    bars.map(bar => {
        if(bar[0] === 0) ctx.strokeRect(x, y, 80, bar[1]);
        else ctx.fillRect(x, y, 80, bar[1]);
        y += bar[1] + bar[2];
    })

    x = 20;
    y = homeHeight + workHeight + 100;
    ctx.lineWidth = 2;
    ctx.fillStyle  = "#303030";
    ctx.strokeStyle = "#303030";
    bars.map(bar => {
        if(bar[0] === 0) ctx.strokeRect(x, y, 80, bar[1]);
        else ctx.fillRect(x, y, 80, bar[1]);
        y += bar[1] + bar[2];
    })

    // contact
    ctx.lineWidth = 1;
    let contact = document.getElementById('contact').getBoundingClientRect();
    const contactHeight = contact.height;
    const contactY = homeHeight + workHeight + blogHeight;
    ctx.beginPath();
    ctx.moveTo(0, height - contactHeight);
    ctx.lineTo(width, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, height - contactHeight / 3);
    ctx.lineTo(width/3, height - contactHeight * 2 / 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width, height - contactHeight *2 / 3);
    ctx.lineTo(width/3, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width / 3 , height -  contactHeight * 2 / 3, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(width / 3, height -  contactHeight * 2 / 3, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#303030";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc((width * 2 / 3), height - contactHeight / 3 , 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc((width * 2 / 3), height - contactHeight / 3 , 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#303030";
    ctx.fill();
    ctx.stroke();

}

function drawSpiral(ctx, x, y) {
    ctx.strokeStyle = "#303030";
    var i = 0, j=0, k=1;
    var dir = 3;  //starts north. North=0, West=1, South=2, East=3
    var ZOOM = 15;
    while (k<18) {
        if (dir == 0) {  //North
            x = x - (i*ZOOM);
            y = y - (k*ZOOM);
            ctx.beginPath();
            ctx.arc(x,y+(k*ZOOM),(k*ZOOM),0,Math.PI*1.5,true);
            ctx.stroke();
        }
        else if (dir == 1) {  //West
            x = x - (k*ZOOM);
            //y = y;
            ctx.beginPath();
            ctx.arc(x+(k*ZOOM),y+(k*ZOOM),(k*ZOOM),Math.PI*1.5,Math.PI,true);
            ctx.stroke();
        }
        else if (dir == 2) {  //South
            //x = x;
            y = y + (j*ZOOM); 
            ctx.beginPath();
            ctx.arc(x+(k*ZOOM),y,(k*ZOOM),Math.PI,Math.PI/2,true);
            ctx.stroke();
        }
        else if (dir == 3) {  //East
            x = x + (j*ZOOM);
            y = y - (i*ZOOM);
            ctx.beginPath();
            ctx.arc(x,y,(k*ZOOM),Math.PI/2,0,true);
            ctx.stroke();
        }
        ctx.strokeRect(x, y, (k*ZOOM), (k*ZOOM));
        i=j;
        j=k;
        k=i+j;
        dir = (dir+1)%4;
    }
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("load", adjustCanvasHeight);

// Panggil fungsi saat ukuran jendela diubah
window.onresize = adjustCanvasHeight;