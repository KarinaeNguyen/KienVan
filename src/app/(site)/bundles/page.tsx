import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Bundles | Kiến Văn",
};

const BundlesPage = () => {
  const byProblem = [
    "Quản trị khi áp lực",
    "Ra quyết định tốt hơn",
    "Làm cha mẹ tỉnh thức",
  ];

  const byStage = [
    "Người mới làm quản lý",
    "Founder / Chủ doanh nghiệp",
    "Gia đình có con nhỏ",
  ];

  return (
    <>
      <Breadcrumb
        pageName="Book Bundles"
        pageDescription="Bundle theo vấn đề và theo giai đoạn, có video giải thích rõ ràng."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="mb-14">
            <h2 className="text-2xl font-semibold text-midnight_text">Bundle theo VẤN ĐỀ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {byProblem.map((item) => (
                <Link
                  key={item}
                  href="/bundles/quan-tri-khi-ap-luc"
                  className="p-6 rounded-2xl bg-white shadow-course-shadow"
                >
                  <h3 className="text-lg font-semibold text-midnight_text">{item}</h3>
                  <p className="text-sm text-black/70 mt-2">🎬 Video TikTok: Vì sao nên mua gói này?</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-midnight_text">Bundle theo GIAI ĐOẠN</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {byStage.map((item) => (
                <Link
                  key={item}
                  href="/bundles/quan-tri-khi-ap-luc"
                  className="p-6 rounded-2xl bg-white shadow-course-shadow"
                >
                  <h3 className="text-lg font-semibold text-midnight_text">{item}</h3>
                  <p className="text-sm text-black/70 mt-2">Danh sách sách trong bundle</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BundlesPage;
