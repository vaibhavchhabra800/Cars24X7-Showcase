var activecar=".blueimg";
var selectedcolour=".blue";
$(".redimg").hide();
$(".greyimg").hide();
$(".silverimg").hide();

$(document).ready(function(){
    $(".blue").addClass("selected");




});

$(document).ready(function(){
    //$(".red").css({'border-style': 'solid','border-width': '20px','border-color': 'black'});

    $(".red").click(function(){
        hideshow(".redimg",activecar);
        changecolourselected('.red');
        $(".red").addClass("selected");


        //$(".red").css({'border': '-2px solid blue'});
        move(elem,87);
        move(elem2,64);
        callgauge();

    });

});


$(document).ready(function(){
    $(".blue").click(function(){
        hideshow(".blueimg",activecar);
        move(elem,87);
        changecolourselected('.blue');
        move(elem2,64);
        callgauge();
    });
});
$(document).ready(function(){
    $(".grey").click(function(){
        hideshow(".greyimg",activecar);
        move(elem,87);
        changecolourselected('.grey');
        move(elem2,64);
        callgauge();
    });
});

$(document).ready(function(){
    $(".silver").click(function(){
        hideshow(".silverimg",activecar);
        move(elem,87);
        changecolourselected('.silver');
        move(elem2,64);
        callgauge();

    });
});



function hideshow(colour) {
    console.log("before");
    console.log(activecar);
    $(activecar).hide();
    $(colour).show();
    activecar = colour;
    console.log("After");
    console.log(activecar);

}


var elem = document.getElementById("myBar");
var elem2 = document.getElementById("myBar2");
function move(elem,width1) {
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= width1) {
            clearInterval(id);
        }
        else {
            width++;
            if(elem.id=="myBar"){
                document.getElementById("id87").innerText=(width);
            }
            else if(elem.id=="myBar2"){
                document.getElementById("id64").innerText=(width);

            }
            elem.style.width = width + '%';
        }
    }
}
move(elem,87);
move(elem2,64);


function callgauge(){
// For the gauge

    var opts = {
        angle: -0.01, // The span of the gauge arc
        lineWidth: 0.33, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#CFCF30',   // Colors
            colorStop: '#DAAC3F',    // just experiment with them
        strokeColor: '#E0DC9F',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

    };
    var target = document.getElementById('canvas-preview'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 20; // set animation speed (32 is default value)
    gauge.set(88); // set actual value

    gauge.setTextField(document.getElementById("preview-textfield"));
}
callgauge();

function changecolourselected(color1)
{

    $(document).ready(function(){
        selectedcolour
        $(selectedcolour).removeClass("selected");
        $(color1).addClass("selected");
        selectedcolour=color1;

    });


}


// var opts = {
//     lines: 12, // The number of lines to draw
//     angle: 0.22, // The length of each line
//     lineWidth: 0.1, // The line thickness
//     pointer: {
//         length: 0.9, // The radius of the inner circle
//         strokeWidth: 0.035, // The rotation offset
//         color: '#000000' // Fill color
//     },
//     limitMax: 'false', // If true, the pointer will not go past the end of the gauge
//     colorStart: '#2DA3DC', // Colors
//     colorStop: '#C0C0DB', // just experiment with them
//     strokeColor: '#EEEEEE', // to see which ones work best for you
//     generateGradient: true
// };
// var target = document.getElementById('canvas-preview'); // your canvas element
// var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
// gauge.maxValue = 100; // set max gauge value
// gauge.animationSpeed = 32; // set animation speed (32 is default value)
// gauge.set(35); // set actual value
// gauge.setTextField(document.getElementById("preview-textfield"));