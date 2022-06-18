canvas = document.getElementById("myCanvas");
color ="red";
ctx=canvas.getContext("2d");


var last_position_of_x , last_position_of_x ;

canvas.addEventListener("touchstart" , my_touchstart)

var Width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (Width < 992){
  document.getElementById("myCanvas").width=new_width;
  document.getElementById("myCanvas").width=new_height;
}
function my_touchstart(e)
{ 
   console.log(e);
  last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
  last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove" , my_touchmove)


function my_touchmove(e)
{ 
    
    current_position_of_Mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2 ;
       ctx.moveTo(last_position_of_x , last_position_of_y );
      ctx.lineTo(current_position_of_Mouse_x , current_position_of_Mouse_y);
        ctx.stroke();

    

    last_position_of_x = current_position_of_Mouse_x;
    last_position_of_y = current_position_of_Mouse_y;
  }