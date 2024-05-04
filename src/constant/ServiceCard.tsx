import hotel from "../assets/hotel.webp";
import train from "../assets/train.webp";
import ship from "../assets/ship.webp";
import plane from "../assets/plane.webp";
import call from "../assets/call.webp";
import pdam from "../assets/pdam.webp";
import token from "../assets/token.webp";

import { ServiceCardArrayType } from "../type/component/molecules/ServiceCard";

export const ServiceCardData: ServiceCardArrayType = [
  {
    title: "Kamar Hotel",
    desc: "Pesan kamar untuk menginap di hotel yang sahabat TiketQ inginkan.",
    icon: hotel,
    link: "/hotel",
  },
  {
    title: "Tiket Kereta",
    desc: "Jangan sampai kehabisan tiket kereta saat sahabat TiketQ akan melakukan perjalanan",
    icon: train,
    link: "/train",
  },
  {
    title: "Tiket Kapal",
    desc: "Menikmati pemandangan samudera saat bepergian dengan keluarga sahabat TiketQ.",
    icon: ship,
    link: "/ship",
  },
  {
    title: "Tiket Pesawat",
    desc: "Jarak yang jauh bukan halangan untuk bertemu orang tercinta sahabat TiketQ.",
    icon: plane,
    link: "/plane",
  },
  {
    title: "Pulsa",
    desc: "Tetap terhubung dengan semuanya, jangan lupa isi pulsa ya sahabat TiketQ.",
    icon: call,
    link: "/pulsa",
  },
  {
    title: "PDAM",
    desc: "Jangan sampai telat bayar tagihan PDAM ya ahabat TiketQ.",
    icon: pdam,
    link: "/pdam",
  },
  {
    title: "Token Listrik",
    desc: "Abadikan momen bahagia sahabat TiketQ dengan penerangan yang cukup.",
    icon: token,
    link: "/token",
  },
];
