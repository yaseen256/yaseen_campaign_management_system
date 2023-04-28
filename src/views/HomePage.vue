<template>
  <div class="create-campaign">
    <h2>Create Campaign</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="campaign.name" required />
      </div>
      <div class="form-group">
        <label for="event">Event</label>
        <input type="text" id="event" v-model="campaign.event" required />
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <input type="text" id="type" v-model="campaign.type" required />
      </div>
      <div class="form-group">
        <label for="action">Action</label>
        <input type="text" id="type" v-model="campaign.action" required />
      </div>
      <div class="form-group">
        <label for="products">Products</label>
        <input type="text" id="products" v-model="campaign.products" required />
      </div>
      <div class="form-group">
        <label for="coupon">Coupon</label>
        <input type="text" id="coupon" v-model="campaign.coupon" required />
      </div>
      <div class="form-group">
        <button type="button" @click="createCampaign">Create Campaign</button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapState } from "vuex";

export default {
  data: function () {
    return {
      campaign: {
        name: "",
        action: "",
        event: "",
        type: "",
        products: "",
        coupon: "",
      },
    };
  },
  computed: {
    ...mapState(["campaignData"]),
  },
  methods: {
    ...mapActions(["setCampaignData"]),
    createCampaign() {
      let tmp = [...this.campaignData];
      tmp.push(this.campaign);
      this.setCampaignData(tmp);
      router.push("/campaigns");
    },
  },
};
</script>

<style scoped>
.create-campaign {
  max-width: 400px;
  margin: 100px auto 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
