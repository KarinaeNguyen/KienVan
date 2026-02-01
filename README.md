# Website Template Quick Scan

Date: 2026-01-26

## Quick Scan Summary
- Framework: Next.js 14 (App Router) with React 18 and Tailwind CSS.
- Structure: Home page plus auth and documentation pages; MDX/markdown content exists under markdown/blog but no visible route wiring.
- Styling: Tailwind + global CSS; component-driven layout in src/components.
- Auth: UI for sign-in/up and password flows; next-auth dependency present.

## Notable Observations
- Route set is small and clear; the home page composes reusable sections.
- Mixed branding strings in metadata (e.g., “eLearning”, “Property”, “Crypgo”), which may need alignment.
- Blog content exists but no app route currently discovered for it.
- API folder contains data.tsx but no route handlers detected under app/api (no route.ts).

## Sitemap (Planned)
/
├── Home
│   ├── Hero: Chọn sách đúng để giải quyết vấn đề bạn đang gặp
│   ├── Choose by Need (CTA chính)
│   ├── Best Sellers (có 🎬 video)
│   ├── Book Bundles nổi bật (có 🎬 video)
│   └── CTA: Xem tất cả sách
│
├── Books
│   ├── All Books
│   │
│   ├── By Category
│   │   ├── Kinh tế & Đầu tư
│   │   ├── Quản trị & Lãnh đạo
│   │   └── Làm Cha Mẹ
│   │
│   ├── By Need  ⭐ TRỤC CHÍNH
│   │   ├── Đang áp lực công việc / kinh doanh
│   │   ├── Muốn nâng cấp tư duy quản trị
│   │   ├── Muốn ra quyết định tốt hơn
│   │   └── Muốn dạy con tốt hơn
│   │
│   └── Best Sellers / Gợi ý của Kiến Văn
│
├── Book Detail  ⭐ TRANG QUYẾT ĐỊNH
│   ├── Thông tin sách + Giá
│   ├── CTA: Mua ngay / Thêm vào giỏ
│   ├── 🎬 Video TikTok Review (60–90s)
│   ├── Cuốn này giúp bạn giải quyết gì?
│   ├── Phù hợp với ai / Không phù hợp với ai
│   ├── Nên đọc khi nào?
│   ├── Gợi ý cách đọc & áp dụng
│   ├── Thường được mua cùng
│   └── Gợi ý Bundle liên quan (có 🎬 video)
│
├── Book Bundles  ⭐ 
│   ├── Bundle theo VẤN ĐỀ
│   │   ├── Quản trị khi áp lực
│   │   ├── Ra quyết định tốt hơn
│   │   └── Làm cha mẹ tỉnh thức
│   │
│   ├── Bundle theo GIAI ĐOẠN
│   │   ├── Người mới làm quản lý
│   │   ├── Founder / Chủ doanh nghiệp
│   │   └── Gia đình có con nhỏ
│   │
│   └── Bundle Detail
│       ├── 🎬 Video TikTok: Vì sao nên mua gói này?
│       ├── Danh sách sách trong bundle
│       ├── Thứ tự đọc gợi ý
│       └── CTA: Mua bundle
│
├── Reading Experience  
│   ├── Reading Guides
│   │   ├── Cách đọc sách kinh tế không quá tải
│   │   ├── Cách đọc sách quản trị để áp dụng
│   │   └── Cách đọc sách làm cha mẹ cùng con
│   └── Notes & Reflections (ngắn, thực tế)
│
├── Checkout
│   ├── Giỏ hàng
│   ├── Thông tin giao hàng
│   ├── Thanh toán
│   └── Xác nhận đơn
│
├── Account (Optional – rất gọn)
│   ├── Đơn hàng của tôi
│   └── Gợi ý sách tiếp theo (dựa trên lịch sử mua)
│
├── About
│   ├── Vì sao Kiến Văn bán sách
│   └── Triết lý chọn sách
│
├── Support
│   ├── FAQ
│   ├── Đổi trả & vận chuyển
│   └── Liên hệ
│
└── Legal
