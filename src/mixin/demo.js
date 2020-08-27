export default {
  data: () => ({
    msg: 'this is mixin data',
    mixinMsg: 'this is mixin data',
  }),
  created() {
    console.log('created in mixin.');
  },
  methods: {
    onClick() {
      console.log('trigger onClick in mixin')
    },
  },
};
