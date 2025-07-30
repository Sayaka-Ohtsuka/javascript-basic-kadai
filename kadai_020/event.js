
const btn = document.getElementById('btn');

const parentList = document.getElementById('text');


btn.addEventListener('click', () => {
    

  // li要素を新しく作成する
  const childList = document.createElement('text');

  childList.textContent = 'ボタンをクリックしました';

  
  parentList.appendChild(childList);
});

btn.addEventListener('click', () => {
    
  // parentListの最初の子要素を削除する
  parentList.removeChild(parentList.firstChild);

});