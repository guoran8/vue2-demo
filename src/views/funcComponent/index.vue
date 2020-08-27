<template functional>
  <div class="book">
    {{ props.book.name }} {{ props.book.price }}
  </div>
</template>
<script>
  Vue.component('book', {
    functional: true,
    props: {
      book: {
        type: Object,
        required: true
      }
    },
    render: function(createElement, context) {
      return createElement(
        'div',
        {
          attrs: {
            class: 'book'
          }
        },
        [context.props.book]
      )
    }
  })
</script>