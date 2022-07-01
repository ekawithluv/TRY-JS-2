const btnone = document.querySelector('.btnone');
const btntwo = document.querySelector('.btntwo');
const btnthree = document.querySelector('.btnthree');
const firsta = document.querySelector('.firsta');
const firstb = document.querySelector('.firstb');
const firstc = document.querySelector('.firstc');
const seca = document.querySelector('.seca');
const secb = document.querySelector('.secb');
const secc = document.querySelector('.secc');
const x = document.querySelector('.x');
const n = document.querySelector('.n');
const answerone = document.querySelector('.answerone');
const answertwo = document.querySelector('.answertwo');
const answerthree = document.querySelector('.answerthree');

btnone.addEventListener ('click', function(e) {
    let a = parseInt(firsta.value);
    let b = parseInt(firstb.value);
    let c = parseInt(firstc.value);
    D = b*b-4*a*c;    
    if (D>0)
    {answerone.innerHTML = 'x1 = ' + ((-b+Math.sqrt(D))/(2*a)) + ', x2 = ' + ((-b-Math.sqrt(D))/(2*a))+'.';}
    else if (D==0)
    {answerone.innerHTML = 'x = ' + (-b/2*a) +'.';}
    else
    {answerone.innerHTML = 'Уравнение не имеет корней.';};
});

btntwo.addEventListener ('click', function(e) {
    a = parseInt(seca.value);
    b = parseInt(secb.value);
    c = parseInt(secc.value);
    answertwo.innerHTML = Math.min(a,b,c) +'.';
});

btnthree.addEventListener ('click', function(e) {
    a = parseInt(x.value);
    b = parseInt(n.value);
    answerthree.innerHTML = Math.pow(a,b);
});
