$(document).keypress(function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "z":
            var c = new Audio('sounds/c.mp3');
            c.play();
            break;
        case "x":
            var d = new Audio('sounds/d.mp3');
            d.play();
            break;
        case "c":
            var e = new Audio('sounds/e.mp3');
            e.play();
            break;
        case "v":
            var f = new Audio('sounds/f.mp3');
            f.play();
            break;
        case "b":
            var g = new Audio('sounds/g.mp3');
            g.play();
            break;
        case "n":
            var a = new Audio('sounds/a.mp3');
            a.play();
            break;
        case "m":
            var b = new Audio('sounds/b.mp3');
            b.play();
            break;
        case ",":
            var ch = new Audio('sounds/higher/ch.mp3');
            ch.play();
            break;
        case ".":
            var dh = new Audio('sounds/higher/dh.mp3');
            dh.play();
            break;
        case "/":
            var eh = new Audio('sounds/higher/eh.mp3');
            eh.play();
            break;
        case "s":
            var csharp = new Audio('sounds/csharp.mp3');
            csharp.play();
            break;
        case "d":
            var dsharp = new Audio('sounds/dsharp.mp3');
            dsharp.play();
            break;
        case "g":
            var fsharp = new Audio('sounds/fsharp.mp3');
            fsharp.play();
            break;
        case "h":
            var gsharp = new Audio('sounds/gsharp.mp3');
            gsharp.play();a
            break;
        case "j":
            var asharp = new Audio('sounds/asharp.mp3');
            asharp.play();
            break;
        case "l":
            var csharph = new Audio('sounds/higher/csharph.mp3');
            csharph.play();
            break;
        
        case ";":
            var dsharph = new Audio('sounds/higher/dsharph.mp3');
            dsharph.play();
            break;
        case "q":
            var ch = new Audio('sounds/higher/ch.mp3');
            ch.play();
            break;
        case "w":
            var dh = new Audio('sounds/higher/dh.mp3');
            dh.play();
            break;
        case "e":
            var eh = new Audio('sounds/higher/eh.mp3');
            eh.play();
            break;
        case "r":
            var fh = new Audio('sounds/higher/fh.mp3');
            fh.play();
            break;
        case "t":
            var gh = new Audio('sounds/higher/gh.mp3');
            gh.play();
            break;
        case "y":
            var ah = new Audio('sounds/higher/ah.mp3');
            ah.play();
            break;
        case "u":
            var bh = new Audio('sounds/higher/bh.mp3');
            bh.play();
            break;
        case "2":
            var csharph = new Audio('sounds/higher/csharph.mp3');
            csharph.play();
            break;
        case "3":
            var dsharph = new Audio('sounds/higher/dsharph.mp3');
            dsharph.play();
            break;
        case "5":
            var fsharph = new Audio('sounds/higher/fsharph.mp3');
            fsharph.play();
            break;
        case "6":
            var gsharph = new Audio('sounds/higher/gsharph.mp3');
            gsharph.play();
            break;
        case "7":
            var asharph = new Audio('sounds/higher/asharph.mp3');
            asharph.play();
            break;
        case "9":
            var csharpsh = new Audio('sounds/higher/csharpsh.mp3');
            csharpsh.play();
            break;
        case "0":
            var dsharpsh = new Audio('sounds/higher/dsharpsh.mp3');
            dsharpsh.play();
            break;
        case "o":
            var dsh = new Audio('sounds/higher/dsh.mp3');
            dsh.play();
            break;
        case "p":
            var esh = new Audio('sounds/higher/esh.mp3');
            esh.play();
            break;
        case "i":
            var csh = new Audio('sounds/higher/csh.mp3');
            csh.play();
            break;
        

        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = $("#" + currentKey);
    activeButton.addClass("pressed");
    setTimeout(function() {
      activeButton.removeClass("pressed");
    }, 100);
}
  