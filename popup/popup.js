(()=>{
    let btn = document.getElementById('make_screenshot_btn');
    btn.onclick = () => {

        chrome.tabs.captureVisibleTab({
            quality: 100,
            format: 'png'
        }, (img) => {

            localStorage.setItem('img', img);

            // setTimeout(() => {
                let newURL = "screentab/screentab.html";
                chrome.tabs.create({
                    url: newURL
                });
            // }, 133);
        });

        

    }



})();
