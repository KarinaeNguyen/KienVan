import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kiến Văn",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        pageDescription="Vì sao Kiến Văn bán sách và triết lý chọn sách."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">Vì sao Kiến Văn bán sách</h3>
              <p className="text-sm text-black/70 mt-2">
                Giúp bạn chọn đúng sách để giải quyết vấn đề thật trong công việc và cuộc sống.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">Triết lý chọn sách</h3>
              <p className="text-sm text-black/70 mt-2">
                Ưu tiên sách có tính hệ thống, thực hành, và tạo ra thay đổi rõ ràng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
