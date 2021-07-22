let $  = window.jQuery;

let canvas = $('#myCanvas');
window.onload = () => {
    let setCanvasArea = ()=> {
        canvas.attr('width', $(window).width());
        canvas.attr('height', $(window).height());
    };
    setCanvasArea();
    window.onresize = setCanvasArea;

}
