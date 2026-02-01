import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Detail | Kiến Văn",
};

const BookDetailPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Book Detail"
        pageDescription="Trang quyết định: thông tin sách, video review và gợi ý đọc."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl font-semibold text-midnight_text">
                Tư duy hệ thống cho quản trị
              </h1>
              <p className="text-black/70">
                Thông tin sách + Giá: 320.000đ
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/checkout"
                  className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium"
                >
                  Mua ngay
                </Link>
                <Link
                  href="/checkout"
                  className="bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium"
                >
                  Thêm vào giỏ
                </Link>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-midnight_text">
                  Cuốn này giúp bạn giải quyết gì?
                </h2>
                <p className="text-black/70">
                  Tối ưu hệ thống quản trị, giảm áp lực, tăng hiệu quả đội ngũ.
                </p>
                <h2 className="text-xl font-semibold text-midnight_text">
                  Phù hợp với ai / Không phù hợp với ai
                </h2>
                <p className="text-black/70">
                  Phù hợp với quản lý, founder; không phù hợp với người cần sách giải trí nhanh.
                </p>
                <h2 className="text-xl font-semibold text-midnight_text">Nên đọc khi nào?</h2>
                <p className="text-black/70">
                  Khi cần tái cấu trúc hệ thống và tư duy ưu tiên.
                </p>
                <h2 className="text-xl font-semibold text-midnight_text">
                  Gợi ý cách đọc & áp dụng
                </h2>
                <p className="text-black/70">
                  Đọc theo chương và ghi chú theo tình huống thực tế của bạn.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ysz5S6PUM-U"
                  title="Video TikTok Review"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-black/60 mt-4">
                🎬 Video TikTok Review (60–90s)
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-midnight_text">Thường được mua cùng</h3>
                <ul className="list-disc list-inside text-black/70 mt-2 space-y-1">
                  <li>Ra quyết định trong bất định</li>
                  <li>Quản trị khi áp lực</li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-midnight_text">
                  Gợi ý Bundle liên quan (có 🎬 video)
                </h3>
                <Link
                  href="/bundles/quan-tri-khi-ap-luc"
                  className="text-primary text-sm font-medium mt-2 inline-block"
                >
                  Bundle Quản trị khi áp lực&nbsp;&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetailPage;
