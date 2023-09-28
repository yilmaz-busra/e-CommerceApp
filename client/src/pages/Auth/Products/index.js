import React from "react";
import Card from "../../../Components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../../api";

function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
