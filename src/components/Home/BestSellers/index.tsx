import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/util";

const BestSellers = () => {
  const books = [
    {
      title: "Tư duy hệ thống cho quản trị",
      author: "Gợi ý của Kiến Văn",
      img: "/images/courses/courseone.png",
      video: true,
      href: "/books/tu-duy-he-thong",
    },
    {
      title: "Ra quyết định trong bất định",
      author: "Gợi ý của Kiến Văn",
      img: "/images/courses/coursetwo.png",
      video: true,
      href: "/books/ra-quyet-dinh",
    },
    {
      title: "Làm cha mẹ tỉnh thức",
      author: "Gợi ý của Kiến Văn",
      img: "/images/courses/coursethree.png",
      video: true,
      href: "/books/lam-cha-me-tinh-thuc",
    },
  ];

  return (
    <section id="best-sellers" className="py-16 bg-white">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-midnight_text text-3xl lg:text-4xl font-semibold">
              Sách bán chạy
            </h2>
            <p className="text-black/70 mt-3 max-w-2xl">
              Những cuốn sách được chọn lọc, có video review ngắn để bạn ra quyết định nhanh.
            </p>
          </div>
          <Link
            href="/books#best-sellers"
            className="text-primary text-base font-medium hover:tracking-widest duration-500"
          >
            Xem thêm&nbsp;&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Link
              key={book.title}
              href={book.href}
              className="bg-white shadow-course-shadow rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="relative">
                <Image
                  src={`${getImagePrefix()}${book.img}`}
                  alt={book.title}
                  width={400}
                  height={260}
                  className="w-full h-auto"
                />
                {book.video && (
                  <span className="absolute top-4 left-4 bg-secondary text-white text-xs px-3 py-1 rounded-full inline-flex items-center gap-2">
                    <Icon icon="tabler:video" /> 🎬 Video
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-midnight_text">
                  {book.title}
                </h3>
                <p className="text-sm text-black/70 mt-2">{book.author}</p>
                <div className="mt-4 text-primary text-sm font-medium">
                  Xem chi tiết&nbsp;&gt;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
