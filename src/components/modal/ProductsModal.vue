<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            <h3>Products Listed In This Campaign</h3>
          </slot>
        </div>
        <div v-for="product in products" :key="product.id" class="modal-body">
          <p class="border-bottom pb-1">
            Product Name :
            <span class="fw-bolder fst-italic"> {{ product.title }} </span>
          </p>
          <div class="d-flex flex-wrap justify-content-around">
            <div v-for="(image, index) in filteredImages(product)" :key="index">
              <div v-if="loading" class="text-center">
                <LoaderIcon />
              </div>
              <img
                v-if="!loading"
                :src="image"
                alt=""
                width="210"
                height="140"
                class="shadow-sm"
                @loadstart="onImageLoadStart()"
                @load="onImageLoadEnd()"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger fw-bold" @click="$emit('close')">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderIcon from "../loader/LoaderIcon.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    filteredImages() {
      return (product) => product.images.slice(1, 4);
    },
  },
  name: "ProductsModal",
  props: { products: { type: Array } },
  components: { LoaderIcon },
  methods: {
    onImageLoadStart: function () {
      this.loading = true;
    },
    onImageLoadEnd: function () {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* CSS for modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  height: 650px;
  overflow-y: auto;
  width: 950px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.modal-body {
  margin: 20px 0;
  font-size: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* .modal-footer button {
  background-color: #42b983;
  color: #fff;
  padding: 8px 20px;
  border-radius: 3px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.modal-footer button:hover {
  background-color: #368c6e;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
