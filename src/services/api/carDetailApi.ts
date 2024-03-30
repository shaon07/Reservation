import { BASE_URL } from "@/constants";

export const getCarDetail = async () => {
  const data = await fetch(`${BASE_URL}/carsList`);
  const res = await data.json();
  if (res.status === "success") {
    return res.data;
  } else {
    return [];
  }
};
