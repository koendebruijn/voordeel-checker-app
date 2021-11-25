import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
  Pressable,
  Button
} from "native-base";
import AppHeading from "./components/Heading";
import { SafeAreaView, ScrollView } from "react-native";
import ProductSearch from "./components/ProductSearch";
import { environment } from "./environment";
import { getItemsInSale } from "./lib/api";
import { Product } from "./@types/Product";
import ProductList from "./components/ProductList";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark"
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const onSearch = async (productName: string) => {
    setIsloading(true);

    const res = await getItemsInSale(productName);

    if (res.data) setProducts(res.data);

    setIsloading(false);
  };

  return (
    <NativeBaseProvider>
      <Box bg='coolGray.100' flex={1}>
        <VStack margin={5} safeArea safeAreaBottom bg='coolGray.100'>
          <AppHeading />
          <ProductSearch onSubmit={onSearch} isLoading={isLoading} />
          <ProductList products={products} />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
