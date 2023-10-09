import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect } from "react";
function Card({ item }) {
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${item._id}`}>
        {/* lazy e bakilacak */}
        <Image src={item.photos[0]} alt="Product" loading="lazy" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            {/* calismadi */}
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>
          <Box>{item.price}</Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Addto Basket</Button>
    </Box>
  );
}
export default Card;
