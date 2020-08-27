import baseImg from '@/assets/logo.png'

let timer = null;

// 监听器
let observer = new IntersectionObserver((entries) => {
  // entries 是所有被监听对象的集合
  entries.forEach((entry) => {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      // 当被监听元素到临界值且未加载图片时触发。
      return !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
    }
  })
}) 