import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading Experience | Kiến Văn",
};

const ReadingExperiencePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Reading Experience"
        pageDescription="Hướng dẫn đọc và ghi chú để áp dụng ngay vào thực tế."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="mb-14">
            <h2 className="text-2xl font-semibold text-midnight_text">Reading Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[
                "Cách đọc sách kinh tế không quá tải",
                "Cách đọc sách quản trị để áp dụng",
                "Cách đọc sách làm cha mẹ cùng con",
              ].map((guide) => (
                <div key={guide} className="p-6 rounded-2xl bg-white shadow-course-shadow">
                  <h3 className="text-lg font-semibold text-midnight_text">{guide}</h3>
                  <p className="text-sm text-black/70 mt-2">Gợi ý tóm tắt, dễ áp dụng.</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-midnight_text">Notes & Reflections</h2>
            <p className="text-black/70 mt-2">
              Ghi chú ngắn, thực tế để bạn dùng ngay trong tuần này.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                "3 câu hỏi để ra quyết định tốt hơn",
                "Một trang hệ thống hóa công việc",
              ].map((note) => (
                <div key={note} className="p-6 rounded-2xl bg-white shadow-course-shadow">
                  <h3 className="text-lg font-semibold text-midnight_text">{note}</h3>
                  <p className="text-sm text-black/70 mt-2">Ngắn gọn, rõ ràng, thực dụng.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadingExperiencePage;
