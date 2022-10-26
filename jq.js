document.getElementById("header").style.color="purple";
document.getElementById("header").style.textAlign="center";
$('body').css({"background-color":"skyblue","padding":"20px"});
$('button').css({"color":"brown","padding":"10px","font-size":"20px","background-color":"yellow","border":"none"})
$('.flex').css({"display":"flex","gap":"10%","justify-content":"center"})
$('.row2').css({"width":"20%",});
$('.row1').css({"width":"20%",});
$('input').css({"padding":"20px"})

$(document).ready(function(){
    $("#button1").click(function(){
        let first = $("#input1").val();
        $("#head1").addClass(first);
        console.log("hello ");
    });
    $('#button2').click(function(){
        let first = $("#input1").val();
        $("#head1").removeClass(first);
    })
});

document.addEventListener('DOMContentLoaded', function(){
h1Element = document.querySelector('.head2');
h1Element.setAttribute('style',"color:white");
})
document.getElementById("button3").addEventListener("click",()=>{
    let second = document.querySelector( "#input2" ).value;
    h1Element.classList.add(second)
})
document.getElementById("button4").addEventListener("click",()=>{
let second = document.querySelector( "#input2" ).value;
h1Element.classList.remove(second)
})


