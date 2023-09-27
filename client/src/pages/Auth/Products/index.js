import React from "react";
import Card from "../../../Components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
function Products() {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;
