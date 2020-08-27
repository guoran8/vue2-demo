const animationType = {
  skipTime: Math.floor(1000 / 60),
  // 获取dom上的属性
  getStyle(el, attr) {
    if (window.getComputedStyle) {
      return window.getComputedStyle(el, null)[attr];
    }

    return el.currentStyle[attr];
  },
  // 匀速直线运动
  uniform(el, attr, target, speed) {
    clearInterval(el.timer);
    let iSpeed = null;
    let iCur = parseInt(this.getStyle(el, attr), 10);
    iSpeed = target - iCur > 0 ? speed : -speed;
    el.timer = setInterval(() => {
      iCur = parseInt(this.getStyle(el, attr), 10);
      if (Math.abs(target - iCur) < Math.abs(iSpeed)) {
        clearInterval(el.timer);
        el.style[attr] = target + 'px';
      } else {
        el.style[attr] = iCur + iSpeed + 'px';
      }
    }, this.skipTime);
  },
  // 弹性直线运动
  elastic(el, attr, target) {
    clearInterval(el.timer);
    // 运动中的速度和加速度实际上都是用dom和target的距离来决定的
    // 在缓冲运动中 iSpeed随着距目标点的位移矢量来决定iSpeed的方向为大小
    // 这里不用 iSpeed 直接控制, 弹性运动中为了实现目标线左右来回运动
    // 用 a 做变化的矢量来控制 iSpeed的方向和大小
    let iSpeed = 0;
    let a = 1;
    const u = 0.8;

    el.timer = setInterval(() => {
      a = (target - parseInt(this.getStyle(el, attr))) / 5;
      iSpeed += a;
      iSpeed *= u;
      if (Math.abs(iSpeed) < 1 && Math.abs(target - parseInt(this.getStyle(el, attr))) < 1) {
        // 经测如果if里填dom.style.left == target + 'px'也是可以进入if停止定时器的，不会永远不到target
        // 到一定程度系统直接取到target值
        el.style[attr] = target + 'px';
        clearInterval(el.timer);
      } else {
        el.style[attr] = parseInt(this.getStyle(el, attr)) + iSpeed + 'px';
      }
    }, this.skipTime + 4);
  }
};

// 初始化运动函数
function animation(el, binding, position = '0', direction = 'x', mode = 'uniform') {
  el.style.position = 'absolute';
  // 选择方向
  switch(direction) {
    case 'x':
      direction = 'left';
      break;
    case 'y':
      direction = 'top';
      break;
    default:
      throw new Error('direction 只能为 x 或 y');
  }

  // 选择运动函数
  switch (mode) {
    case 'uniform':
      animationType.uniform(el, direction, position, 8);
      break;
    case 'elastic':
      animationType.elastic(el, direction, position);
      break;
    default:
      throw new Error('没有注册运动函数');
  }
}

export default {
  // 所在组件VNode更新时调用
  update(el, binding) {
    console.log(el);
    // 位移量
    const position = binding.value;
    // 方向
    const direction = binding.arg;
    // 运动模式
    if (Object.keys(binding.modifiers).length > 1) {
      throw new Error('运动模式只能有一个');
    }

    const mode = Object.keys(binding.modifiers)[0] ? Object.keys(binding.modifiers)[0] : 'uniform';
    animation(el, binding, position, direction, mode);
  },
};
