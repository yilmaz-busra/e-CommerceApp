import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
function Card({ item }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link>
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
