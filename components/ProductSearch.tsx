import { Button, HStack, Icon, IconButton, Input } from "native-base";
import React, { FC, useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";

interface Props {
  onSubmit: (productName: string) => void;
  isLoading: boolean;
}

const ProductSearch: FC<Props> = ({ isLoading, onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <HStack space={2} h={10} mb={5}>
      <Input
        flex={1}
        placeholder='Product naam'
        _focus={{
          borderColor: "green.400"
        }}
        isDisabled={isLoading}
        h={10}
        value={searchValue}
        onChangeText={(value) => setSearchValue(value)}
      />
      <Button
        onPress={() => onSubmit(searchValue)}
        h={10}
        bg='green.400'
        _pressed={{
          bg: "green.600"
        }}
        isDisabled={searchValue.length === 0}
        isLoading={isLoading}
        rightIcon={
          <Icon as={Feather} name='search' color='warmGray.50' size='sm' />
        }
      />
    </HStack>
  );
};

export default ProductSearch;
