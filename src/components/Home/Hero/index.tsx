import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {

    return (
        <section id="home-section" className="bg-slateGray">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-24 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="col-span-6 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full w-fit">
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block"
                            />
                            <p className="text-sm font-semibold">Gợi ý sách đúng theo nhu cầu thật</p>
                        </div>
                        <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold">
                            Chọn sách đúng để giải quyết vấn đề bạn đang gặp
                        </h1>
                        <p className="text-black/70 text-lg">
                            Kiến Văn giúp bạn đi thẳng vào cuốn sách phù hợp – theo nhu cầu, theo giai đoạn, và theo mục tiêu.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                href="/books#by-need"
                                className="bg-secondary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-secondary/90"
                            >
                                Chọn sách theo nhu cầu
                            </Link>
                            <Link
                                href="/books"
                                className="bg-primary/10 text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-primary hover:text-white"
                            >
                                Xem tất cả sách
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-6 pt-4 text-black/80">
                            <span className="inline-flex items-center gap-2 text-sm font-medium">
                                <Icon icon="tabler:video" className="text-primary text-lg" /> Best Sellers có 🎬 video
                            </span>
                            <span className="inline-flex items-center gap-2 text-sm font-medium">
                                <Icon icon="tabler:video" className="text-primary text-lg" /> Bundle nổi bật có 🎬 video
                            </span>
                        </div>
                    </div>
                    <div className="col-span-6 flex justify-center">
                        <div className="w-full max-w-xl">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/20 via-white/40 to-secondary/20 blur-2xl" />
                                <div className="relative rounded-[28px] border border-white/70 bg-white/70 backdrop-blur-md shadow-[0_24px_80px_-40px_rgba(15,23,42,0.6)] p-2">
                                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/ysz5S6PUM-U"
                                    title="Giới thiệu Kiến Văn"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-black/60 mt-4">
                                🎬 Video giới thiệu nhanh: Chọn sách đúng – giải quyết vấn đề thật.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;
