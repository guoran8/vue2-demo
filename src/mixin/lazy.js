import logo from '@/assets/logo.png';

export default {
  data: () => ({
    baseImg: logo,
    $_timer: null,
  }),
  mounted() {
    this.$_lazyLoadImage();
    // 监听 scroll
    window.addEventListener('scroll', this.$_handleScroll);
    // 移除监听
    this.$on('hook:beforeDestory', () => {
      window.removeEventListener('scroll', this.$_handleScroll);
    });
  },
  methods: {
    $_handleScroll() {
      clearTimeout(this.$_timer);
      this.$_timer = setTimeout(() => {
        this.$_lazyLoadImage();
      }, 20);
    },
    // 懒加载图片
    $_lazyLoadImage() {
      const imgList = this.$_getNeedLoadingImg();
      if (imgList.length <= 0) return;

      // 是否展示
      imgList.forEach((img) => {
        if (this.$_imgInView(img)) {
          this.$_showImg(img);
        }
      });
    },
    $_getNeedLoadingImg() {
      let images = Array.from(document.querySelectorAll('img[data-src]'));
      images = images.filter((ele) => !ele.getAttribute('isLoaded'));
      return images;
    },
    $_imgInView(img) {
      console.log(document.documentElement.scrollTop)
      return window.innerHeight + document.documentElement.scrollTop >= img.offsetTop;
    },
    $_showImg(img) {
      const image = new Image();
      const src = img.getAttribute('data-src');
      console.log(src);
      image.src = src;
      image.onload = () => {
        img.src = src;
        img.setAttribute('isLoaded', true);
      };
    },
  }
}