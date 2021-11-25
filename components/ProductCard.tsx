import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  AspectRatio,
  Pressable
} from "native-base";
import React, { FC } from "react";
import { Product } from "../@types/Product";
import * as WebBrowser from "expo-web-browser";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Pressable onPress={() => WebBrowser.openBrowserAsync(product.productLink)}>
      <HStack mb={5} bg='white' rounded='md'>
        <Box p={2} position='relative'>
          <Image
            source={{
              uri: product.imageUrl
            }}
            alt='Alternate Text'
            size='xl'
          />
          <Box
            position='absolute'
            bottom='0'
            left='0'
            bg='red.500'
            p={1}
            rounded='sm'
          >
            {product.discount}
          </Box>
        </Box>
        <VStack flex={1} p={2}>
          <Text bold fontSize='md'>
            {product.name}
          </Text>
          <Text fontSize='xs' opacity={0.6}>
            {product.priceUnit}
          </Text>
          <HStack space={2} mt={2}>
            {product.oldPrice && (
              <Text strikeThrough opacity={0.8} flex={0} alignSelf='flex-end'>
                € {product.oldPrice}
              </Text>
            )}
            <Text fontSize='xl' flex={1} color='red.500' lineHeight={21} bold>
              € {product.price}
            </Text>
          </HStack>
          <Text flex={1} mt={2}>
            {product.supermarket}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default ProductCard;
