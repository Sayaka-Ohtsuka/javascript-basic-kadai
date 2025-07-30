const btn = document.getElementById("btn");

const text = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  // textに「ボタンをクリックしました」というテキストを追加する
  text.textContent = "ボタンをクリックしました";
  console.log(text);
})