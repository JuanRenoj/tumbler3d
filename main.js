/*
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();*/
/**
 * var createImage=function(w,h){var i=document.createElement("canvas");i.width=w;i.height=h;i.ctx=i.getContext("2d");return i;}

//--
    var img = new Image();

    img.src = "https://plus.unsplash.com/premium_photo-1681406994530-3de7406c21a5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      // alert(iw)

      var xOffset = 0, //left padding
        yOffset = 0; //top padding

      var a = 75.0; //image width
      var b = 10; //round ness

      var scaleFactor = iw / (4 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 3, ih, X + xOffset, y + yOffset, 1, 174);

      }
    };
//--

var canvas = createImage(400,400);
var ctx = canvas.ctx;
document.body.appendChild(canvas)
ctx.clearRect(0,0,400,400)
var image = createImage(800,200);
image.ctx.font = "60px arial";
image.ctx.textAlign = "center";
image.ctx.fillStyle = "#999";
image.ctx.fillRect(0,10,image.width,image.height-20)
image.ctx.fillStyle = "white";
image.ctx.drawImage(img, 0, 0, 800, 200);


//---------------------------------------------------------------------
// create shading map
var shading = createImage(400,200);
// left to right shading
var g1 = shading.ctx.createLinearGradient(0,0,400,0);
g1.addColorStop(0,"rgba(245,245,245,1)");
g1.addColorStop(0.05,"rgba(255,255,255,1)");
g1.addColorStop(0.5,"rgba(230,230,230,1)");
g1.addColorStop(0.95,"rgba(255,255,255,1)");
g1.addColorStop(1,"rgba(245,245,245,1)");
shading.ctx.fillStyle = g1;
shading.ctx.fillRect(0,0,400,200);

// bottom to top shading
var g = shading.ctx.createLinearGradient(0,0,0,200);
g.addColorStop(1,"rgba(200,200,200,1)");
g.addColorStop(0.95,"rgba(200,200,200,0.4)");
g.addColorStop(0,"rgba(255,255,255,0.0)");
shading.ctx.globalCompositeOperation = "multiply";
shading.ctx.fillStyle = g;
shading.ctx.fillRect(0,0,400,200);


var g = shading.ctx.createRadialGradient(0,-100,100,0,-100,200);
g.addColorStop(0,"rgba(200,200,200,1)");
g.addColorStop(0.95,"rgba(255,255,255,1)");
g.addColorStop(1,"rgba(255,255,255,0)");
shading.ctx.fillStyle = g;
shading.ctx.globalCompositeOperation = "screen";
shading.ctx.setTransform(1.4,0,0,1,200,0);
shading.ctx.beginPath();
shading.ctx.arc(0,-100,200,0,Math.PI * 2);
shading.ctx.globalAlpha = 0.5;
shading.ctx.fill();
shading.ctx.setTransform(1,0,0,1,0,0);
shading.ctx.fillStyle = g1;
shading.ctx.fillRect(0,0,400,200);

var overlay = createImage(400,400);
draw(shading,overlay.ctx,0, 40,30,110,200,1);

function draw(image,ctx,ang,tilt, perspective, width, height,stretch){
    var step = 1/(Math.max(image.width,400));
    for(var i = 0; i < 1; i += step){
        var a = i * Math.PI;
        var a1 = (i+ step*2) * Math.PI ;
        var ix = i * image.width*stretch;
        var iw = step * image.width*stretch;
        a += ang * Math.PI * 2;
        a1 += ang * Math.PI * 2;
        a = Math.PI -a;
        a1 = Math.PI -a1;
        var x = canvas.width * 0.5;
        var y = canvas.height * 0.1;
        
        var x1 = x + Math.cos(a1) * width;
        var y1 = y + Math.sin(a) * tilt;
        x += Math.cos(a) * width;
        y += Math.sin(a) * tilt;
        var s = Math.sin(a);
        var s1 = Math.sin(a1);
        if(s > 0 || s1 > 0){
            ctx.drawImage(image,ix,0,iw,image.height,x1,y- s * perspective*0.5,(x-x1-1),height + s * perspective)
        }
        
        
    }
}
var w = canvas.width;
var h = canvas.height;

// main update function
function update1(timer){
    ctx.setTransform(1,0,0,1,0,0); // reset transform
    ctx.globalAlpha = 1;           // reset alpha
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,w,h);
    ctx.drawImage(overlay,0,0);
    draw(image,ctx,timer / 4000, 40,30,110,200,1)
    ctx.globalCompositeOperation = "multiply";
    ctx.drawImage(overlay,0,0);
    ctx.globalAlpha = 0.2
    ctx.globalCompositeOperation = "lighten";
    ctx.drawImage(overlay,0,0);
    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(update1);
}

 requestAnimationFrame(update1);
 */