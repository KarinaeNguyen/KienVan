import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/util";

const FeaturedBundles = () => {
  const bundles = [
    {
      title: "Quản trị khi áp lực",
      description: "Giữ nhịp, ra quyết định, và dẫn dắt đội ngũ tốt hơn.",
      img: "/images/courses/courseone.png",
      href: "/bundles/quan-tri-khi-ap-luc",
      video: true,
    },
    {
      title: "Ra quyết định tốt hơn",
      description: "Giảm sai lầm, tăng tốc độ và chất lượng lựa chọn.",
      img: "/images/courses/coursetwo.png",
      href: "/bundles/ra-quyet-dinh-tot-hon",
      video: true,
    },
    {
      title: "Làm cha mẹ tỉnh thức",
      description: "Thấu hiểu, đồng hành, và nuôi dưỡng mối quan hệ bền vững.",
      img: "/images/courses/coursethree.png",
      href: "/bundles/lam-cha-me-tinh-thuc",
      video: true,
    },
  ];

  return (
    <section id="book-bundles" className="py-16 bg-slateGray">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-midnight_text text-3xl lg:text-4xl font-semibold">
              Book Bundles nổi bật (có 🎬 video)
            </h2>
            <p className="text-black/70 mt-3 max-w-2xl">
              Các gói sách theo vấn đề và giai đoạn, đã có video giải thích vì sao nên mua.
            </p>
          </div>
          <Link
            href="/bundles"
            className="text-primary text-base font-medium hover:tracking-widest duration-500"
          >
            Xem tất cả bundle&nbsp;&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <Link
              key={bundle.title}
              href={bundle.href}
              className="bg-white rounded-2xl overflow-hidden shadow-course-shadow hover:-translate-y-1 transition-transform"
            >
              <div className="relative">
                <Image
                  src={`${getImagePrefix()}${bundle.img}`}
                  alt={bundle.title}
                  width={400}
                  height={260}
                  className="w-full h-auto"
                />
                {bundle.video && (
                  <span className="absolute top-4 left-4 bg-secondary text-white text-xs px-3 py-1 rounded-full inline-flex items-center gap-2">
                    <Icon icon="tabler:video" /> 🎬 Video
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-midnight_text">
                  {bundle.title}
                </h3>
                <p className="text-sm text-black/70 mt-2">
                  {bundle.description}
                </p>
                <div className="mt-4 text-primary text-sm font-medium">
                  Xem bundle&nbsp;&gt;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBundles;
