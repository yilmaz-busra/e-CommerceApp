import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link>
        <Image src="https://picsum.photos/200/300" alt="Product" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            12/12/2023
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Macbook Pro
          </Box>
          <Box>100</Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Addto Basket</Button>
    </Box>
  );
}
export default Card;
