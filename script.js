// 決定ボタンを押してレザルト画面を表示する処理
var result = document.getElementById("result-bg");
var resultImageWrapper = document.getElementById("result-image__wrapper");
var downloadBtn = document.getElementById("download-btn");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var confirm = window.confirm("この組み合わせで決定しますか？");

  if (confirm) {
    if (result.classList.contains("hide")) {
      // hideで隠していたレザルト画面を表示する
      result.classList.remove("hide");
      resultImageWrapper.classList.remove("hide");
      downloadBtn.classList.remove("hide");

    }
  }
})

// レザルト画面の背景をクリックした場合の処理
result.addEventListener("click", function () {
  result.classList.add("hide");
  resultImageWrapper.classList.add("hide");
  downloadBtn.classList.add("hide");
})

// プレビューに表示したい画像一覧

const eyeImages = [
  'images/eye1.png',
  'images/eye2.png',
  'images/eye3.png',
  'images/eye4.png'
];

const mouthImages = [
  'images/mouth1.png',
  'images/mouth2.png',
  'images/mouth3.png',
  'images/mouth4.png',
];

const hairImages = [
  'images/hair1.png',
  'images/hair2.png',
  'images/hair3.png',
  'images/hair4.png',
  'images/hair5.png',
  'images/hair6.png',
];

// 現在表示されている顔のパーツを取得
var displayedEyeImages = document.getElementsByClassName("displayedEyeImage");

var displayedMouthImages = document.getElementsByClassName("displayedMouthImage");

var displayedHairImages = document.getElementsByClassName("displayedHairImage");

// プレビューの枠をidで取得
var previewImageWrapper = document.getElementById("preview-image__wrapper");

// 顔のパーツを選んだときのために新しいimgタグを生成する
var newElementForEye = document.createElement("img");
var newElementForMouth = document.createElement("img");
var newElementForHair = document.createElement("img");

// れざると画面の方も同様
var newElementForEyeResult = document.createElement("img");
var newElementForMouthResult = document.createElement("img");
var newElementForHairResult = document.createElement("img");

// ウィンドウを読み込んだ際の初期状態では①一番左の顔のパーツが選択され、②プレビューに表示されるようにする
window.addEventListener("load", function () {
  // 目の初期設定
  displayedEyeImages[0].classList.add("is-selected");
  newElementForEye.setAttribute("src", eyeImages[0]);
  previewImageWrapper.appendChild(newElementForEye);
  newElementForEyeResult.setAttribute("src", eyeImages[0]);
  resultImageWrapper.appendChild(newElementForEyeResult);


  // 口の初期設定
  displayedMouthImages[0].classList.add("is-selected");
  newElementForMouth.setAttribute("src", mouthImages[0]);
  previewImageWrapper.appendChild(newElementForMouth);
  newElementForMouthResult.setAttribute("src", mouthImages[0]);
  resultImageWrapper.appendChild(newElementForMouthResult);

  // 髪の初期設定
  displayedHairImages[0].classList.add("is-selected");
  newElementForHair.setAttribute("src", hairImages[0]);
  previewImageWrapper.appendChild(newElementForHair);
  newElementForHairResult.setAttribute("src", hairImages[0]);
  resultImageWrapper.appendChild(newElementForHairResult);
})




// 目に関する指定
// まずは一番左の目のパーツをクリックしたときの処理

displayedEyeImages[0].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedEyeImages.length; i++) {
      displayedEyeImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForEye.setAttribute("src", eyeImages[0]);
    previewImageWrapper.appendChild(newElementForEye);
    newElementForEyeResult.setAttribute("src", eyeImages[0]);
    resultImageWrapper.appendChild(newElementForEyeResult);
  }
})

displayedEyeImages[1].addEventListener("click", function (e) {

  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // e.target.classList.remove("is-selected");
    // newElementForEye.remove();

  } else {
    for (i = 0; i < displayedEyeImages.length; i++) {
      displayedEyeImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForEye.setAttribute("src", eyeImages[1]);
    previewImageWrapper.appendChild(newElementForEye);
    newElementForEyeResult.setAttribute("src", eyeImages[1]);
    resultImageWrapper.appendChild(newElementForEyeResult);
  }
})

displayedEyeImages[2].addEventListener("click", function (e) {

  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // e.target.classList.remove("is-selected");
    // newElementForEye.remove();

  } else {
    for (i = 0; i < displayedEyeImages.length; i++) {
      displayedEyeImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForEye.setAttribute("src", eyeImages[2]);
    previewImageWrapper.appendChild(newElementForEye);
    newElementForEyeResult.setAttribute("src", eyeImages[2]);
    resultImageWrapper.appendChild(newElementForEyeResult);
  }
})

displayedEyeImages[3].addEventListener("click", function (e) {

  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // e.target.classList.remove("is-selected");
    // newElementForEye.remove();

  } else {
    for (i = 0; i < displayedEyeImages.length; i++) {
      displayedEyeImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForEye.setAttribute("src", eyeImages[3]);
    previewImageWrapper.appendChild(newElementForEye);
    newElementForEyeResult.setAttribute("src", eyeImages[3]);
    resultImageWrapper.appendChild(newElementForEyeResult);
  }
})





// 口をクリックした場合の指定
displayedMouthImages[0].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedMouthImages.length; i++) {
      displayedMouthImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForMouth.setAttribute("src", mouthImages[0]);
    previewImageWrapper.appendChild(newElementForMouth);
    newElementForMouthResult.setAttribute("src", mouthImages[0]);
    resultImageWrapper.appendChild(newElementForMouthResult)
  }
})

displayedMouthImages[1].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedMouthImages.length; i++) {
      displayedMouthImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForMouth.setAttribute("src", mouthImages[1]);
    previewImageWrapper.appendChild(newElementForMouth);
    newElementForMouthResult.setAttribute("src", mouthImages[1]);
    resultImageWrapper.appendChild(newElementForMouthResult)
  }
})

displayedMouthImages[2].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedMouthImages.length; i++) {
      displayedMouthImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForMouth.setAttribute("src", mouthImages[2]);
    previewImageWrapper.appendChild(newElementForMouth);
    newElementForMouthResult.setAttribute("src", mouthImages[2]);
    resultImageWrapper.appendChild(newElementForMouthResult)
  }
})

displayedMouthImages[3].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedMouthImages.length; i++) {
      displayedMouthImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForMouth.setAttribute("src", mouthImages[3]);
    previewImageWrapper.appendChild(newElementForMouth);
    newElementForMouthResult.setAttribute("src", mouthImages[3]);
    resultImageWrapper.appendChild(newElementForMouthResult)
  }
})





// 髪をクリックした場合の処理
displayedHairImages[0].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedHairImages.length; i++) {
      displayedHairImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForHair.setAttribute("src", hairImages[0]);
    previewImageWrapper.appendChild(newElementForHair);
    newElementForHairResult.setAttribute("src", hairImages[0]);
    resultImageWrapper.appendChild(newElementForHairResult);
  }
})

displayedHairImages[1].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedHairImages.length; i++) {
      displayedHairImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForHair.setAttribute("src", hairImages[1]);
    previewImageWrapper.appendChild(newElementForHair);
    newElementForHairResult.setAttribute("src", hairImages[1]);
    resultImageWrapper.appendChild(newElementForHairResult);
  }
})

displayedHairImages[2].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedHairImages.length; i++) {
      displayedHairImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForHair.setAttribute("src", hairImages[2]);
    previewImageWrapper.appendChild(newElementForHair);
    newElementForHairResult.setAttribute("src", hairImages[2]);
    resultImageWrapper.appendChild(newElementForHairResult);
  }
})

displayedHairImages[3].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedHairImages.length; i++) {
      displayedHairImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForHair.setAttribute("src", hairImages[3]);
    previewImageWrapper.appendChild(newElementForHair);
    newElementForHairResult.setAttribute("src", hairImages[3]);
    resultImageWrapper.appendChild(newElementForHairResult);
  }
})

displayedHairImages[4].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedHairImages.length; i++) {
      displayedHairImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForHair.setAttribute("src", hairImages[4]);
    previewImageWrapper.appendChild(newElementForHair);
    newElementForHairResult.setAttribute("src", hairImages[4]);
    resultImageWrapper.appendChild(newElementForHairResult);
  }
})

displayedHairImages[5].addEventListener("click", function (e) {
  // クリックしたら枠線がつき、プレビューに反映される
  if (e.target.classList.contains("is-selected")) {
    // 何もしない
  } else {
    // displayedEyeImagesの配列の中身全部に対し、is-selectedがついているものを一度全部消した後、クリックしたものにだけis-selectedを付与
    for (i = 0; i < displayedHairImages.length; i++) {
      displayedHairImages[i].classList.remove("is-selected");
    }
    e.target.classList.add("is-selected");

    // 画像枠直下の画像を取得
    newElementForHair.setAttribute("src", hairImages[5]);
    previewImageWrapper.appendChild(newElementForHair);
    newElementForHairResult.setAttribute("src", hairImages[5]);
    resultImageWrapper.appendChild(newElementForHairResult);
  }
})

// ダウンロードボタンを押すとダウンロードされる。ネットから引っ張ってきました
downloadBtn.addEventListener("click", () => {

  html2canvas(resultImageWrapper).then(canvas => {
    let downloadEle = document.createElement("a");
    downloadEle.href = canvas.toDataURL("image/png");
    downloadEle.download = "canvas.png";
    downloadEle.click();
  });
})

