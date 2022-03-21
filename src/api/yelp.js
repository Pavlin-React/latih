import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer az5Lf6-1H8w1v1uSMwo046RicOVX2-mSolxirsh_nzlpsoQ5OYnYy7eTT_gehYlQrWCfbmRDPWl-JsKO8MXlwRoxxeu8uM73VKNPWX9cGK6TSU-JZlNLCUP5Pr81YnYx`,
  },
});



