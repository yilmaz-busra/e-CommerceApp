import axios from "axios";

// axiosla beraber gelen bu özellik sayesinde endpointe istek atılmadan önce işlem yapabiliyoruz.
axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BASE_END_POINT];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const fetchProductList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`
  );
  return data;
};
// ürün detay sayfası için gerçekleştirilecek api isteği
export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`
  );
  return data;
};
// ürün ekleme işlemi için gerçekleştirilecek api isteği
export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
    input
  );

  return data;
};
export const fetchLogin = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,
    input
  );
  return data;
};
// kayıt işlemi sonrası profil bilgilerini aktarmak için kullanılacak istek
export const fetchMe = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`
  );
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
    {
      refresh_token: localStorage.getItem("refresh-token"),
    }
  );
};
