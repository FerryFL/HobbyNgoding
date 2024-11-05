function validasi_nilai() {
    let a = document.getElementById("1")
    let b = document.getElementById("2")
    let c = document.getElementById("3")
    let d = document.getElementById("4")
    let e = document.getElementById("5")
    let scr = 0
    if (a.checked) {
        scr += 1
    }
    if (b.checked) {
        scr += 1
    }
    if (c.checked) {
        scr += 1
    }
    if (d.checked) {
        scr += 1
    }
    if (e.checked) {
        scr += 1
    }
    document.getElementById("nilai").innerHTML = "Nilai anda : " + (scr * 20) + " / 100"
    document.getElementById("restartBtn").style.display = "block";
    document.getElementById("backBtn").style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
    return false
}

function redirect_c() {
    window.location.href = "materi-c.html";
}
function redirect_css() {
    window.location.href = "materi-css.html";
}
function redirect_html() {
    window.location.href = "materi-html.html";
}
function redirect_js() {
    window.location.href = "materi-js.html";
}
function redirect_py() {
    window.location.href = "materi-py.html";
}