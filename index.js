var image = new Image();

var overlayImage = new Image();
var overTumbler = new Image();

overTumbler.src=""  

const design=document.getElementById("design");
document.getElementById("img").addEventListener("change",e=>{
    if(e.target.files.length > 0){
       var  src = URL.createObjectURL(e.target.files[0]);
      image.src=src
      overlayImage.src=src
     overTumbler.src=src     
     design.style.backgroundImage = `url(${src})`;     
    }
  })


/*
  const bntGrabar=document.getElementById("btnGrabar");
   bntGrabar?.addEventListener("click",async()=>{
    const media= await navigator.mediaDevices.getDisplayMedia({
        video:{frameRate:{ideal:300}}
    })
  
    const mediaRecorder=new MediaRecorder(media,{
        mimeType:'video/webm;codecs=vp8,opus'
    });

    mediaRecorder.start();
    const [video]=media.getVideoTracks();
    video.addEventListener("ended",()=>{
        mediaRecorder.stop()
    })
    mediaRecorder.addEventListener("dataavailable",(e)=>{
        const link=document.createElement("a");
        link.href=URL.createObjectURL(e.data);
        link.download="captura.webm";
        link.click()
    })
   })*/
   /*
   const bntDetenerGrabar=document.getElementById("btnDetenerGrabar");
   bntDetenerGrabar.addEventListener("click",async()=>{
    const media= await navigator.mediaDevices.getDisplayMedia({
        video:{frameRate:{ideal:300}}
    })
    const mediaRecorder=new MediaRecorder(media,{
        mimeType:'video/webm;codecs=vp8,opus'
    });
  mediaRecorder.stop()
   })*/
   /**ccanvas */
/*
const canvaTumler=document.getElementById("canvaTumbler");
const contextCanvaTumbler=canvaTumler.getContext("2d");
const imageTumbler=new Image();
imageTumbler.src="./tumbler4.png"
imageTumbler.onload=(()=>{
    //console.log(overlayImage)
    contextCanvaTumbler.drawImage(imageTumbler,0,0,200,600,0,0,125,150);
})

const overCanvaTumbler=document.getElementById("overCanvaTumbler");
const contextOverTumbler=overCanvaTumbler.getContext("2d");
overTumbler.onload=(()=>{
    console.log(overTumbler)
   
    const imageWidth=overTumbler.width;
    const imageheight=overTumbler.height;
     let xOffset=0;
     let yOffset=0;
      let a=55;
      let b=3;
      let scaleFactor=imageWidth/(2.06 * a)
      for(x=0;x<imageWidth; x++){
        let y=(b/a)*Math.sqrt(a*a -(x-a)*(x-a));
        if(!isNaN(y)){
            contextOverTumbler.drawImage(overTumbler,x*scaleFactor,0,imageWidth/20,550, x+xOffset, y+yOffset,1,150);
        }
      }
})
*/
   var cv = document.getElementById('cvImage');
   var ctx = cv.getContext('2d');
  const    CANVAHEIGHT=300;
  const CANVAWIDTH=500;
   var foto = {x: 0, y: 0, w: 400, h: 300};
   var isUp = null;
 //  image.src = './img.jpg';

   image.onload = function() {
    
       drawImage(image, foto.w, foto.h);
   }

   function drawImage(image, w, h) {
    ctx.clearRect(0, 0, CANVAWIDTH, CANVAHEIGHT);
    
       ctx.drawImage(image, foto.x, foto.y, w, h);
    
    /*

       ctx.fillStyle = 'red';

       ctx.beginPath();
       ctx.arc(foto.x, foto.y, 5, 0, Math.PI * 2, 1);
       ctx.fill();

       ctx.beginPath();
       ctx.arc(w + foto.x, h / 2 + foto.y, 5, 0, Math.PI * 2, 1);
       ctx.fill();

       ctx.beginPath();
       ctx.arc(w / 2 + foto.x, h + foto.y, 5, 0, Math.PI * 2, 1);
       ctx.fill();

       ctx.beginPath();
       ctx.arc(w + foto.x, h + foto.y, 5, 0, Math.PI * 2, 1);
       ctx.fill();*/
    
   }

   window.onmousedown = function(evt) {
       var ax = evt.clientX - cv.offsetLeft;
       var ay = evt.clientY - cv.offsetTop;

    //   console.log(ax, ay);

       if (ax >= foto.w - 5 + foto.x
           && ax <= foto.w + foto.x + 5
           && ay >= foto.h / 2 + foto.y - 5
           && ay <= foto.h / 2 + foto.y + 5
       ) {
           isUp = 'right';
       }

       else if (ax >= foto.w / 2 + foto.x - 5
           && ax <= foto.w / 2 + foto.x + 5
           && ay >= foto.h + foto.y - 5
           && ay <= foto.h + foto.y + 5
       ) {
           isUp = 'bottom';
       }

       else if (
            ax >= foto.w + foto.x - 5
           && ax <= foto.w + foto.x + 5
           && ay >= foto.h + foto.y - 5
           && ay <= foto.h + foto.y + 5
       ) {
           isUp = 'bottom-right';
       }

       else if (ax >= foto.x - 5 && ax <= foto.x + 5
           && ay >= foto.y - 5 && ay <= foto.y + 5
       ) {
           isUp = 'top-left';
       }
   }

   window.onmousemove = function(evt) {
       var ax = evt.clientX - cv.offsetLeft;
       var ay = evt.clientY - cv.offsetTop;
console.log("moviendo", ax)
       if (isUp === 'right') {
           foto.w = ax - foto.x;
           ctx.clearRect(0, 0, CANVAWIDTH, CANVAHEIGHT);
           drawImage(image, foto.w, foto.h);
       }

       else if (isUp === 'bottom') {
           foto.h = ay - foto.y;
           ctx.clearRect(0, 0, CANVAWIDTH, CANVAHEIGHT);
           drawImage(image, foto.w, foto.h);
       }

       else if (isUp === 'bottom-right') {
           foto.w = ax - foto.x;
           foto.h = ay - foto.y;
           ctx.clearRect(0, 0, CANVAWIDTH, CANVAHEIGHT);
           drawImage(image, foto.w, foto.h);
       }

       else if (isUp === 'top-left') {
           var dx = foto.x - ax;
           var dy = foto.y - ay;
           foto.x = ax;
           foto.y = ay;
           foto.w += dx;
           foto.h += dy;
           ctx.clearRect(0, 0, CANVAWIDTH, CANVAHEIGHT);
           drawImage(image, foto.w, foto.h);
       }
   }

   window.onmouseup = function(evt) {
       isUp = null;
   }
