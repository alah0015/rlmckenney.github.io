//* get element by id section
var _body = document.getElementById('body')
var _close = document.getElementById('close')
var _modal = document.getElementById('modal')
var _gallery = document.getElementById('gallery')
    //* exit button events
window.addEventListener('keyup', closeEventHandler)
_close.addEventListener('click', closeEventHandler)
    //* exit button function
function closeEventHandler(e) {
    if ((e.target && e.target.classList.contains('close')) || (e.keyCode === 27 && _body.classList.contains("no-scroll"))) {
        _body.classList.remove('no-scroll')
    }
}
//* image getting hovered  and expanding
_gallery.addEventListener('click', function (e) {
        console.log(e)
        if (e.target && e.target.className == "intro") {
            var url = e.target.getAttribute("data-src")
            _body.classList.add('no-scroll')
            _modal.innerHTML = '<img src="' + url + '">';
        }
    })
    //* js ends