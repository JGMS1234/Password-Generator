const inc_ups = document.getElementById('upper');
const inc_low = document.getElementById('lower');
const inc_numb = document.getElementById('numbers');
const inc_special = document.getElementById('special');
const p_length = document.getElementById('p_length');
const gen_pass = document.getElementById('gen_pass');
const intro = document.getElementById('int');

document.getElementById('chkbox').onclick = function(){
    if(inc_low.checked){
        intro.textContent = '';}
    else if(inc_numb.checked){
        intro.textContent = '';}
    else if(inc_special.checked){
        intro.textContent = '';}
    else if(inc_ups.checked){
        intro.textContent = '';}
    else{intro.textContent = 'Please Select Your Desired Options Below';}}

function generate_password(){
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbs = '0123456789';
    const special = '!@#$%&*?.,^';
    let chars = '';
    let pass = '';
    let rand_Index;

    inc_ups.checked && (chars += upper);
    inc_low.checked && (chars += lower);
    inc_numb.checked && (chars += numbs);
    inc_special.checked && (chars += special);
    
    for(let i = 0; i < p_length.value; i++){
        rand_Index = Math.floor(Math.random() * chars.length)
        pass += chars[rand_Index]}
        chars.length === 0? gen_pass.textContent = 'Please Select One Option Minimum' : gen_pass.textContent = `Generated Password: ${pass}`;
        console.log(pass);}
