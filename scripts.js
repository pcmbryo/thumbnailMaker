// 色の定義
let colors = ["#ffb6c1", "#fff4b5", "#c0ffb5", "#b5fff4", "#b5c0ff", "#f4b5ff"]

// フレームの色をiに変える
function frameColor(i) {
    var frame = document.getElementById("frame")
    frame.style.backgroundColor = colors[i]
}

// title-(i)の文字を変える
function inputTitle(i) {
    var titleTxt = document.getElementById("title-txt-" + i)
    var title = document.getElementById("title-" + i)
    title.innerHTML = titleTxt.value
}

// title-1の文字色をiに変える
function textColor1(i) {
    var text = document.getElementById("title-1")
    text.style.color = colors[i]
}

// title-2の文字色をiに変える
function textColor2(i) {
    var text = document.getElementById("title-2")
    text.style.color = colors[i]
}

function vertical(i) {
    var titleV = document.getElementById("vertical-" + i)
    var title = document.getElementById("title-" + i)
    title.style.bottom = titleV.value + "px"
}
  
  function horizontal(i) {
    var titleH = document.getElementById("horizontal-" + i)
    var title = document.getElementById("title-" + i)
    title.style.left = titleH.value + "%"
}
  
  function sizing(i) {
    var titleSize = document.getElementById("size-" + i)
    var title = document.getElementById("title-" + i)
    title.style.fontSize = titleSize.value + "px"
}

// サムネの猫をiに変える
function choiceImg(i) {
    var image = document.getElementById("cat-image")
    image.src = "images/cat0" + i + ".png"
}

// 画像のポップアップをコントロールする
function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.toggle('is-show');
            html2canvas(document.querySelector("#capture")).then(function(canvas) {
            var result = document.querySelector("#result")
            result.innerHTML = ""
            document.querySelector("#result").appendChild(canvas);
            });
        });
    }
}
popupImage();

// 初期表示時に画像と文字色をランダムに変える
function randomSet() {
    var i = Math.floor(Math.random() * (9 - 1)) + 1
    var image = document.getElementById("cat-image")
    image.src = "images/cat0" + i + ".png"
  
    var j = Math.floor(Math.random() * 5)
    var text = document.getElementById("title-1")
    text.style.color = colors[j]
    var k = Math.floor(Math.random() * 5)
    a = true
    while (a) {
        if (j != k) {
            text = document.getElementById("title-2")
            text.style.color = colors[k]
            a = false
        }
        k = Math.floor(Math.random() * 5)
    }
}
randomSet()