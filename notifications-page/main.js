function markAll() {
    let notifs = document.getElementsByClassName("unread")
    let dots = document.getElementsByClassName("dot")
    for (i = 0; i < notifs.length; i++) {
        notifs[i].className = "notif rounded"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.display = "none"
    }
    for (i = 0; i < notifs.length; i++) {
        notifs[i].className = "notif rounded"
    }
    document.getElementById("notificationCount").innerHTML = 0
}

document.getElementById("markAll").addEventListener("click", () => {
    markAll()
    return false
})