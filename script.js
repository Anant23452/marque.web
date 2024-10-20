// loader ke liye animation
var vl = gsap.timeline()
 
  function loader(){
      var b =0;
    setInterval(() => {
     b += Math.floor(Math.random()*20)
     if(b<100){

         document.querySelector(".loader h2").innerHTML=b+"%";
        }
        else{
            b= 100;
            document.querySelector(".loader h2").innerHTML=b+"%";
     }
    }, 100);
  }
//  loader();
vl.to(".loader",{
    top:"-100vh",
    delay:1,
    duration:2,
    onStart:loader()
  })
  vl.to(".loader h2",{
    scale:1.4,
    delay:.5,
    duration:1,
    
  })



// page ke liye 
vl.to(".page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:200,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})
