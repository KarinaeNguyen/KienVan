import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

const BUNDLE_SLUGS = ["quan-tri-khi-ap-luc", "ra-quyet-dinh-tot-hon", "lam-cha-me-tinh-thuc"];

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return BUNDLE_SLUGS.map((slug) => ({ slug }));
};

export const metadata: Metadata = {
  title: "Bundle Detail | Kiến Văn",
};

const BundleDetailPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Bundle Detail"
        pageDescription="Chi tiết bundle, video giới thiệu và thứ tự đọc gợi ý."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-semibold text-midnight_text">
                Bundle: Quản trị khi áp lực
              </h1>
              <p className="text-black/70 mt-2">
                Danh sách sách trong bundle:
              </p>
              <ul className="list-disc list-inside text-black/70 mt-3 space-y-1">
                <li>Tư duy hệ thống cho quản trị</li>
                <li>Ra quyết định trong bất định</li>
                <li>Thiết kế đội ngũ hiệu quả</li>
              </ul>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-midnight_text">Thứ tự đọc gợi ý</h2>
                <p className="text-black/70 mt-2">
                  Bắt đầu từ tư duy hệ thống → ra quyết định → tối ưu đội ngũ.
                </p>
              </div>
              <Link
                href="/checkout"
                className="inline-flex mt-8 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium"
              >
                Mua bundle
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ysz5S6PUM-U"
                  title="Video TikTok: Vì sao nên mua gói này?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-black/60 mt-4">
                🎬 Video TikTok: Vì sao nên mua gói này?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BundleDetailPage;
