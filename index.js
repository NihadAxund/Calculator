let element = document.getElementById("MathID");
function Call_d1(id) {
    let item = document.getElementById(id);
    if (element.innerHTML.length > 26) {
        return;
    }
    else if (element.innerHTML == "0" || element.innerHTML == "Infinity" || element.innerHTML == "-Infinity") {
        element.innerHTML = "";
    }
    element.innerHTML += item.id;
}

function Call_d2(id) {
    let item = document.getElementById(id);

    if (id != ".") {
        element.innerHTML = eval(element.innerHTML);
    }
    if (id == "=") {
        return
    }
    element.innerHTML += item.id;
}
function Ac_Btn() {
    element.innerHTML = "0";
}

const checkbox = document.getElementById('checkbox');
const root = document.documentElement;
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.toggle('dark');
        root.style.setProperty('--Color3', 'white');
        root.style.setProperty('--Color2','rgb(31, 31, 31)')

       // alert('Checkbox seçildi!');
    } else {
        root.style.setProperty('--Color3', 'rgb(31, 31, 31)');
        root.style.setProperty('--Color2','white')
    }
})