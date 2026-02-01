import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Kiến Văn",
};

const CheckoutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Checkout"
        pageDescription="Giỏ hàng, thông tin giao hàng, thanh toán và xác nhận đơn."
      />

      <section className="py-14">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Giỏ hàng",
              "Thông tin giao hàng",
              "Thanh toán",
              "Xác nhận đơn",
            ].map((step) => (
              <div key={step} className="p-6 rounded-2xl bg-white shadow-course-shadow">
                <h3 className="text-lg font-semibold text-midnight_text">{step}</h3>
                <p className="text-sm text-black/70 mt-2">Bước trong quy trình checkout.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
