import React from "react";
import Card from "../../../Components/Card";
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../../api";

function Products() {
  const {
    data,
    error,
    hasNextPage,
    isFetchingNextPage,
    status,
    fetchNextPage,
  } = useInfiniteQuery("products", fetchProductList, {
    //gelen grubun(ürünlerin) son grup olduğunu kontrol ederek, eger son grup degilse yeni sayfaya  gecer.
    getNextPageParam: (lastGroup, allgroups) => {
      const morePageExist = lastGroup?.length === 12;
      if (!morePageExist) {
        return;
      }
      //yeniden fetch yapıp ürün gosterimi artar
      return allgroups.length + 1;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* {data.map((item, key) => (
          <Card key={key} item={item} />
        ))} */}
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item._id}>
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
}

export default Products;
