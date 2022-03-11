<template>
  <div ref="styles" style="display:none;" :id="id" v-if="!needDestroy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'customStyles',
  props: {
    styleId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: null,
      needDestroy: false,
    }
  },
  created() {
    //this.$slots.default[0].text = this.$slots.default[0].text.replace(/\n/g, "").replace(/ /g, "")
    if(this.styleId.length && templateSelector(`#${this.styleId}`)) {
      this.needDestroy = true;
      this.$destroy();
    }
  },
  mounted() {
    if(!this.needDestroy) {
      this.id = this.styleId.length ? this.styleId : 'style'+this._uid;
      let styleTag = document.createElement('style');
      styleTag.textContent = this.$refs.styles.textContent;
      this.$refs.styles.textContent = null;
      this.$refs.styles.appendChild(styleTag);
    }
  }
}
</script>
