const btns = document.getElementsByClassName("exit-btn");
let exited = false;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        exited = true;
        // document.getElementById("start").classList.add("hidden");
        console.log("SAIR PRESSED");
        document.getElementById("boxFadeHTML").classList.remove("dismiss");
        setTimeout(() => {
            if (navigator.userAgent.indexOf("Android") != -1) {
                JSBridge.closeGame();
            }
            if (navigator.userAgent.indexOf("like Mac") != -1) {
                window.webkit.messageHandlers.quitEvent.postMessage({});
            } else {
                console.log("SAIR");
            }
        }, 500);
    });
}
