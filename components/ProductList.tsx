import { Box, FlatList, SectionList, Text } from "native-base";
import React, { FC } from "react";
import { Product } from "../@types/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item: Product) => item.productLink}
    />
  );
};

export default ProductList;
