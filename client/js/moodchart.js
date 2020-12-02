let hap = 0;
let sad = 0;
let ang = 0;
let disgust = 0;
let fear = 0;
let surp = 0;

document.getElementById("happy").addEventListener('click', () => {
    ++hap;
    console.log(hap);
    redraw();
});
document.getElementById("sad").addEventListener('click', () => {
    ++sad;
    console.log(sad);
    redraw();
});
document.getElementById("angry").addEventListener('click', () => {
    ++ang;
    console.log(ang);
    redraw();
});
document.getElementById("disgust").addEventListener('click', () => {
    ++disgust;
    console.log(disgust);
    redraw();
});
document.getElementById("fear").addEventListener('click', () => {
    ++fear;
    console.log(fear);
    redraw();
});
document.getElementById("surprise").addEventListener('click', () => {
    ++surp;
    console.log(surp);
    redraw();
});
function redraw(){
    let total = hap + sad + fear + disgust + ang + surp;
    if (total === 0) {
        document.getElementById("h").style.height = "0%";
        document.getElementById("sa").style.height = "0%";
        document.getElementById("f").style.height = "0%";
        document.getElementById("d").style.height = "0%";
        document.getElementById("a").style.height = "0%";
        document.getElementById("s").style.height = "0%";
    }
    else {
        document.getElementById("h").style.height = JSON.stringify(hap*100/total)+"%";
        document.getElementById("sa").style.height = JSON.stringify(sad*100/total)+"%";
        document.getElementById("f").style.height = JSON.stringify(fear*100/total)+"%";
        document.getElementById("d").style.height = JSON.stringify(disgust*100/total)+"%";
        document.getElementById("a").style.height = JSON.stringify(ang*100/total)+"%";
        document.getElementById("s").style.height = JSON.stringify(surp*100/total)+"%";
    }
}

