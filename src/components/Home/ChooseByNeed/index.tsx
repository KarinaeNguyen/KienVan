import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const ChooseByNeed = () => {
  const needs = [
    {
      title: "Đang áp lực công việc / kinh doanh",
      description: "Ổn định lại nhịp làm việc và tư duy ưu tiên.",
      href: "/books#by-need",
    },
    {
      title: "Muốn nâng cấp tư duy quản trị",
      description: "Cấu trúc lại hệ thống và phong cách lãnh đạo.",
      href: "/books#by-need",
    },
    {
      title: "Muốn ra quyết định tốt hơn",
      description: "Giảm cảm tính, tăng chất lượng lựa chọn.",
      href: "/books#by-need",
    },
    {
      title: "Muốn dạy con tốt hơn",
      description: "Đồng hành cùng con bằng tư duy tỉnh thức.",
      href: "/books#by-need",
    },
  ];

  return (
    <section id="choose-by-need" className="py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-midnight_text text-3xl lg:text-4xl font-semibold">
              Choose by Need (CTA chính)
            </h2>
            <p className="text-black/70 mt-3 max-w-2xl">
              Chọn sách theo vấn đề bạn đang gặp để đi nhanh nhất tới kết quả.
            </p>
          </div>
          <Link
            href="/books#by-need"
            className="text-primary text-base font-medium hover:tracking-widest duration-500"
          >
            Xem tất cả nhu cầu&nbsp;&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {needs.map((need) => (
            <div
              key={need.title}
              className="bg-white rounded-2xl shadow-course-shadow p-6 flex flex-col gap-3"
            >
              <div className="inline-flex items-center gap-2 text-primary">
                <Icon icon="tabler:target-arrow" className="text-xl" />
                <span className="text-sm font-semibold">Theo nhu cầu</span>
              </div>
              <h3 className="text-lg font-semibold text-midnight_text">
                {need.title}
              </h3>
              <p className="text-sm text-black/70">{need.description}</p>
              <Link
                href={need.href}
                className="text-primary text-sm font-medium mt-2"
              >
                Chọn sách phù hợp&nbsp;&gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseByNeed;
