<template>
  <div class="container mt-5">
    <div v-for="campaign in campaignData" :key="campaign.name" class="row">
      <div class="col-md-3">
        <div class="card shadow-lg">
          <div class="card-header">
            <p class="h2">Campaign</p>
          </div>
          <div class="card-body">
            <div class="row">
              <p>
                Name:
                <span class="fw-bolder fst-italic">{{ campaign.name }}</span>
              </p>
              <p>
                Type:
                <span class="fw-bolder fst-italic"> {{ campaign.type }}</span>
              </p>
              <p>
                Event:
                <span class="fw-bolder fst-italic">{{ campaign.event }} </span>
              </p>
              <p>
                Action:
                <span class="fw-bolder fst-italic"> {{ campaign.action }}</span>
              </p>
              <p>
                Coupon:
                <span class="fw-bolder fst-italic"> {{ campaign.coupon }}</span>
              </p>
            </div>
            <div class="row">
              <button
                class="btn btn-success mx-auto col-md-11"
                @click="openModal()"
              >
                See Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="errorMessage" class="d-flex justify-content-center">
        <p class="text-danger">{{ errorMessage }}</p>
      </div>
    </div>
    <div v-if="loading">
      <LoaderIcon />
    </div>
    <ProductsModal
      v-if="showModal"
      :products="products"
      @close="showModal = false"
    ></ProductsModal>
  </div>
</template>

<script>
import LoaderIcon from "@/components/loader/LoaderIcon.vue";
import ProductsModal from "@/components/modal/ProductsModal.vue";
import { userServices } from "@/Services/userServices";
import { mapState } from "vuex";

export default {
  name: "CampaignsPage",
  components: {
    ProductsModal,
    LoaderIcon,
  },
  data: function () {
    return {
      showModal: false,
      products: null,
      loading: false,
      errorMessage: null,
    };
  },
  computed: {
    ...mapState(["campaignData"]),
  },
  methods: {
    openModal: async function () {
      try {
        this.loading = true;
        let response = await userServices.getProductsData();
        this.products = response?.data?.products;
        this.showModal = true;
      } catch (error) {
        console.log(error);
        this.errorMessage = error?.response?.data;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
