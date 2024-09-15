function modal() {
    const a = document.getElementById('a');
    let p = document.createElement('div');
    p.classList.add('a');
    p.setAttribute('style', 'height: auto');
    p.setAttribute('style', 'width: auto');
    p.setAttribute('style', 'background-color: red');
    a.appendChild(p);
}