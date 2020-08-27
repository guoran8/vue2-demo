// 本地存缓存
function setStorage(id, maxAge) {
  const max = new Date().getTime() + maxAge;
  localStorage.setItem(`news_${id}`, max);
}

// 判断是否过期
function isOverdue(id) {
  const preTime = localStorage.getItem(`news_${id}`);
  if (new Date().getTime() > preTime) {
    localStorage.removeItem(`news_${id}`);
    return true;
  }

  return false;
}

function pick(el, binding) {
  const { id, handle } = binding.value;
  const color = binding.arg ? `#${binding.arg}` : '#999';
  const maxTime = binding.value.maxTime ? binding.value.maxTime : 10000;

  if (localStorage.getItem(`news_${id}`)) {
    if (!isOverdue(id)) {
      el.style.color = color;
    }
  }
  // add click event
  el.onclick = function () {
    handle(id);
    el.style.color = color;
    setStorage(id, maxTime);
  }
}

export default {
  // 钩子函数,第一次绑定到元素时调用
  /**
   * el 指令所绑定的元素
   * binding 指令的描述对象
   */
  bind(el, binding) {
    pick(el, binding);
  }
}