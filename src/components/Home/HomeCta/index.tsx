import Link from "next/link";

const HomeCta = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="bg-primary/10 rounded-3xl px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-midnight_text text-3xl font-semibold">
              Sẵn sàng chọn đúng cuốn sách?
            </h2>
            <p className="text-black/70 mt-3 max-w-2xl">
              Xem tất cả sách và bundle đã được chọn lọc theo nhu cầu thực tế.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/books"
              className="bg-secondary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-secondary/90"
            >
              Xem tất cả sách
            </Link>
            <Link
              href="/bundles"
              className="bg-white text-primary border border-primary px-8 py-4 rounded-full text-base font-medium hover:bg-primary hover:text-white"
            >
              Xem book bundles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
