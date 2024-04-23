const design=document.getElementById("design");
document.getElementById("img").addEventListener("change",e=>{
    console.log(e.target.files[0])
    let image=e.target.files[0]
    let newImage=new Image()
    if(e.target.files.length > 0){
      var src = URL.createObjectURL(e.target.files[0]);
      console.log(image.width)
      var preview = document.getElementById("preview-image");
      preview.src = src;
      console.log(src)
      design.style.backgroundImage = `url(${src})`;
      preview.style.display = "block";
    }
  })



  const bntGrabar=document.getElementById("btnGrabar");
   bntGrabar.addEventListener("click",async()=>{
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
   })
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