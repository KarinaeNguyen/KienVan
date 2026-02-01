import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Kiến Văn",
};

const AccountPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Account"
        pageDescription="Đơn hàng của tôi và gợi ý sách tiếp theo."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">Đơn hàng của tôi</h3>
              <p className="text-sm text-black/70 mt-2">Xem lịch sử và trạng thái đơn hàng.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-course-shadow">
              <h3 className="text-lg font-semibold text-midnight_text">
                Gợi ý sách tiếp theo
              </h3>
              <p className="text-sm text-black/70 mt-2">
                Dựa trên lịch sử mua và nhu cầu của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountPage;
