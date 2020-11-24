let hap = 0;
let sad = 0;
let ang = 0;
let disgust = 0;
let fear = 0;
let surp = 0;

document.getElementById("happy").addEventListener('click', () => {
    ++hap;
    console.log(hap);
});
document.getElementById("sad").addEventListener('click', () => {
    ++sad;
    console.log(sad);
});
document.getElementById("angry").addEventListener('click', () => {
    ++ang;
    console.log(ang);
});
document.getElementById("disgust").addEventListener('click', () => {
    ++disgust;
    console.log(disgust);
});
document.getElementById("fear").addEventListener('click', () => {
    ++fear;
    console.log(fear);
});
document.getElementById("surprise").addEventListener('click', () => {
    ++surp;
    console.log(surp);
});