import axios from "axios";

const ProductServices = {};

ProductServices.all = async () => {
  let url = "products";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ProductServices.single = async (id) => {
  let url = `products/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

export default ProductServices;
