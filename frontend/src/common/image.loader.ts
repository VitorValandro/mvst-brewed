import { ImageLoaderProps } from "next/image";
import api from "./api";

export default function productImageLoader({ src }: ImageLoaderProps): string {
  return `${api}/bucket/${src}`;
}