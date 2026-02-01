import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Sách",
    href: "/books",
    submenu: [
      { label: "Tất cả sách", href: "/books" },
      { label: "Theo danh mục", href: "/books#by-category" },
      { label: "Theo nhu cầu", href: "/books#by-need" },
      { label: "Bán chạy", href: "/books#best-sellers" },
    ],
  },
  { label: "Gói sách", href: "/bundles" },
  { label: "Trải nghiệm đọc", href: "/reading-experience" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Hỗ trợ", href: "/support" },
  {
    label: "Khác",
    href: "/account",
    submenu: [
      { label: "Thanh toán", href: "/checkout" },
      { label: "Tài khoản", href: "/account" },
      { label: "Pháp lý", href: "/legal" },
    ],
  },
];
