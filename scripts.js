// 色の定義
let colors = ["#ffb6c1", "#fff4b5", "#c0ffb5", "#b5fff4", "#b5c0ff", "#f4b5ff"]

// タイトル3が表示中か
appearTitle3 = false
// タイトル4が表示中か
appearTitle4 = false

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

// title-1の文字色をiに変える
function textColor3(i) {
    var text = document.getElementById("title-3")
    text.style.color = colors[i]
}

// title-1の文字色をiに変える
function textColor4(i) {
    var text = document.getElementById("title-4")
    text.style.color = colors[i]
}

// タイトルiの上下を変更する
function vertical(i) {
    var titleV = document.getElementById("vertical-" + i)
    var title = document.getElementById("title-" + i)
    title.style.bottom = titleV.value + "px"
}

// タイトルiの左右を変更する
function horizontal(i) {
    var titleH = document.getElementById("horizontal-" + i)
    var title = document.getElementById("title-" + i)
    title.style.left = titleH.value + "%"
}

// タイトルiのサイズを変更する
function sizing(i) {
    var titleSize = document.getElementById("size-" + i)
    var title = document.getElementById("title-" + i)
    title.style.fontSize = titleSize.value + "px"
}

// サムネを猫iに変える
function choiceCatImg(i) {
    var image = document.getElementById("cat-image")
    image.src = "images/cat0" + i + ".png"
}

// サムネをりょうiに変える
function choiceRyoImg(i) {
    var image = document.getElementById("cat-image")
    image.src = "images/ryo0" + i + ".png"
}

// サムネをりえこiに変える
function choiceRiekoImg(i) {
    var image = document.getElementById("cat-image")
    image.src = "images/rieko0" + i + ".png"
}

// サムネをなしにする
function choiceNoImg() {
    var image = document.getElementById("cat-image")
    image.src = "images/nothing.png"
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
    // 画像
    var i = Math.floor(Math.random() * (9 - 1)) + 1
    var image = document.getElementById("cat-image")
    image.src = "images/cat0" + i + ".png"
  
    // タイトル1
    var j = Math.floor(Math.random() * 5)
    var text = document.getElementById("title-1")
    text.style.color = colors[j]
    // タイトル2
    var j = Math.floor(Math.random() * 5)
    var text = document.getElementById("title-2")
    text.style.color = colors[j]
    // タイトル3
    var j = Math.floor(Math.random() * 5)
    var text = document.getElementById("title-3")
    text.style.color = colors[j]
    // タイトル4
    var j = Math.floor(Math.random() * 5)
    var text = document.getElementById("title-4")
    text.style.color = colors[j]
}
randomSet()

// タイトル3の表示・非表示切り替え
function switchTitle3() {
    var title = document.getElementById("title-3-none")
    var input = document.getElementById("title-input-3-none")
    var button3 = document.getElementById("title-button-3")
    var button4 = document.getElementById("title-button-4")
    
    if (appearTitle3 == false) {
        title.style.display = "block"
        input.style.display = "block"
        button3.innerHTML = '<i class="fas fa-minus"></i>'
        button4.style.display = "block"
        appearTitle3 = true
    } else {
        title.style.display = "none"
        input.style.display = "none"
        button3.innerHTML = '<i class="fas fa-plus"></i>'
        button4.style.display = "none"
        appearTitle3 = false
    }
}

// タイトル4の表示・非表示切り替え
function switchTitle4() {
    var title = document.getElementById("title-4-none")
    var input = document.getElementById("title-input-4-none")
    var button3 = document.getElementById("title-button-3")
    var button4 = document.getElementById("title-button-4")

    if (appearTitle4 == false) {
        title.style.display = "block"
        input.style.display = "block"
        button4.innerHTML = '<i class="fas fa-minus"></i>'
        button3.style.display = "none"
        appearTitle4 = true
    } else {
        title.style.display = "none"
        input.style.display = "none"
        button4.innerHTML = '<i class="fas fa-plus"></i>'
        button3.style.display = "block"
        appearTitle4 = false
    }
}