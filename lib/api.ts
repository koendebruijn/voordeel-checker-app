import { ServerResponse } from "./../@types/ServerResponse";
import axios from "axios";
import { Product } from "../@types/Product";

const baseUrl = "http://192.168.178.101:8080/api/sale";

export const getItemsInSale = async (productName: string) => {
  const url = `${baseUrl}/${productName}`;
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response: ServerResponse<Product[]> = {};
  try {
    const { data } = await axios.get(url);

    response.data = data;
  } catch (e: any) {
    response.error = e.message;
  }

  return response;
};
