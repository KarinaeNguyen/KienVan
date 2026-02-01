import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Kiến Văn",
};

const SupportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support"
        pageDescription="FAQ, đổi trả & vận chuyển, và liên hệ."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">FAQ</h3>
              <p className="text-sm text-black/70 mt-2">Các câu hỏi thường gặp.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">Đổi trả & vận chuyển</h3>
              <p className="text-sm text-black/70 mt-2">Chính sách đổi trả và giao hàng.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">Liên hệ</h3>
              <p className="text-sm text-black/70 mt-2">hello@kienvan.vn • +84 000 000 000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
