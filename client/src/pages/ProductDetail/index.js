import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductList, fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../contextts/BasketContext";

function ProductDetail() {
  // tıklanan ürüne ait id değerini tutmak için
  const { product_id } = useParams();

  const { addToBasket, items } = useBasket();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }
  //hata varsa
  if (isError) {
    return <div>Error</div>;
  }
  console.log(data);

  const images = data.photos.map((url) => ({ original: url }));
  console.log(images);

  console.log(process.env.REACT_APP_BASE_ENDPOINT);

  // sepete eklenmek istenen ürünün hali hazırda spette olup olmadığını kontrol ediyoruz.
  const findBasketItem = items.find((item) => item._id === product_id);
  return (
    <div>
      <Button
        colorScheme={findBasketItem ? "pink" : "green"}
        onClick={() => addToBasket(data, findBasketItem)}
      >
        {findBasketItem ? "Remove From Basket" : "Add to Basket"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YY")}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} showThumbnails="false" />
      </Box>
    </div>
  );
}

export default ProductDetail;
