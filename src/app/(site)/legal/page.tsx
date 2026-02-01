import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal | Kiến Văn",
};

const LegalPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Legal"
        pageDescription="Chính sách bảo mật và điều khoản sử dụng."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="p-8 rounded-2xl bg-white shadow-course-shadow">
            <h2 className="text-2xl font-semibold text-midnight_text">Legal</h2>
            <p className="text-black/70 mt-3">
              Nội dung pháp lý sẽ được cập nhật theo chính sách của Kiến Văn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
