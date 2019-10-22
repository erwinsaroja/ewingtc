var num = 1 ;

 img1     = new Image ()
 img1.src= "image/menu 1.jpg"
 
 img2     = new Image ()
 img2.src= "image/menu 2.jpg"
 
 img3     = new Image ()
 img3.src= "image/menu 3.jpg"
 
 img4     = new Image ()
 img4.src= "image/menu 4.jpg"
 
 img5    = new Image ()
 img5.src= "image/menu 5.jpg"
 
 img6     = new Image ()
 img6.src= "image/menu 6.jpg"
 
 img7     = new Image ()
 img7.src= "image/menu 7.jpg"
 
 img8     = new Image ()
 img8.src= "image/menu 8.jpg"
 
 img9     = new Image ()
 img9.src= "image/menu 9.jpg"
 
 img10     = new Image ()
 img10.src= "image/menu 10.jpg"
 
 img11     = new Image ()
 img11.src= "image/menu 11.jpg"
 
 img12     = new Image ()
 img12.src= "image/menu 12.jpg"
 
 img13     = new Image ()
 img13.src= "image/menu 13.jpg"
 
 img14     = new Image ()
 img14.src= "image/menu 14.jpg"
 
 img15     = new Image ()
 img15.src= "image/menu 15.jpg"
 
 img16     = new Image ()
 img16.src= "image/menu 16.jpg"
 
 img17     = new Image ()
 img17.src= "image/menu 17.jpg"
 
 img18     = new Image ()
 img18.src= "image/menu 18.jpg"
 
 img19     = new Image ()
 img19.src= "image/menu 19.jpg"
 
 img20     = new Image ()
 img20.src= "image/menu 20.jpg"
 
 
 function cuco(x){
     num = num+x;
     if (num == 21)
     {num = 1}
     if (num == 0)
        {num = 20}
        
        document.mypic.src=eval("img"+num+".src");
     
}
