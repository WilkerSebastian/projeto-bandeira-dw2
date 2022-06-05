// parte do copyright

const copy = document.getElementById('copy')

const main = document.getElementById("principal")
main.style.minHeight = `${window.outerHeight}px`

const ano = new Date().getFullYear()

copy.innerHTML = `© ${ano} Copyright:`

// parte do copyright