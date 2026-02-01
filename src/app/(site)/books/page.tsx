import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Kiến Văn",
};

const BooksPage = () => {
  const categories = [
    "Kinh tế & Đầu tư",
    "Quản trị & Lãnh đạo",
    "Làm Cha Mẹ",
  ];

  const needs = [
    "Đang áp lực công việc / kinh doanh",
    "Muốn nâng cấp tư duy quản trị",
    "Muốn ra quyết định tốt hơn",
    "Muốn dạy con tốt hơn",
  ];

  const bestSellers = [
    { title: "Tư duy hệ thống cho quản trị", href: "/books/tu-duy-he-thong" },
    { title: "Ra quyết định trong bất định", href: "/books/ra-quyet-dinh" },
    { title: "Làm cha mẹ tỉnh thức", href: "/books/lam-cha-me-tinh-thuc" },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Books"
        pageDescription="Khám phá sách theo nhu cầu, theo lĩnh vực, và theo gợi ý của Kiến Văn."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div id="all-books" className="mb-14">
            <h2 className="text-2xl font-semibold text-midnight_text">All Books</h2>
            <p className="text-black/70 mt-2">
              Danh mục tổng hợp, cập nhật thường xuyên.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {bestSellers.map((book) => (
                <Link
                  key={book.title}
                  href={book.href}
                  className="px-5 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {book.title}
                </Link>
              ))}
            </div>
          </div>

          <div id="by-category" className="mb-14">
            <h2 className="text-2xl font-semibold text-midnight_text">By Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {categories.map((category) => (
                <div
                  key={category}
                  className="p-6 rounded-2xl bg-white shadow-course-shadow"
                >
                  <h3 className="text-lg font-semibold text-midnight_text">
                    {category}
                  </h3>
                  <p className="text-sm text-black/70 mt-2">
                    Xem sách phù hợp trong danh mục này.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="by-need" className="mb-14">
            <h2 className="text-2xl font-semibold text-midnight_text">By Need ⭐ TRỤC CHÍNH</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
              {needs.map((need) => (
                <div
                  key={need}
                  className="p-6 rounded-2xl bg-white shadow-course-shadow"
                >
                  <h3 className="text-lg font-semibold text-midnight_text">
                    {need}
                  </h3>
                  <p className="text-sm text-black/70 mt-2">
                    Gợi ý sách phù hợp với tình huống này.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="best-sellers">
            <h2 className="text-2xl font-semibold text-midnight_text">
              Best Sellers / Gợi ý của Kiến Văn
            </h2>
            <p className="text-black/70 mt-2">
              Các cuốn sách được Kiến Văn chọn lọc và khuyên đọc.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {bestSellers.map((book) => (
                <Link
                  key={book.title}
                  href={book.href}
                  className="px-5 py-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                >
                  {book.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BooksPage;
