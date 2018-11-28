document
    .querySelector(".request-compliment")
    .addEventListener("click", function() {
        fetch("/compliment")
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                document.querySelector(".compliment").innerText = data.compliment;
            })
            .catch(function(err) {
                console.error(err);
            })
    })

document
    .querySelector(".request-insult")
    .addEventListener("click", function() {
        fetch("/insult")
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                document.querySelector(".insult").innerText = data.insult;
            })
            .catch(function(err) {
                console.error(err);
            })
    })


const box = popmotion.styler(document.querySelector('.box'))

popmotion.tween({
        from: {
            scale: .7
        },
        to: {
            scale: 1
        },
        duration: 1000
    })
    .start(box.set);