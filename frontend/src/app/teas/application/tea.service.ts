import API_URL from "@/common/api";
import { TeaProps } from "../domain/tea";

export const fetchAllTeas = async (): Promise<TeaProps[]> => {
  const res = await fetch(`${API_URL}/tea`);
  const data = await res.json();

  return data;
};
