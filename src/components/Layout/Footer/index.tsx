import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-[#EAF4FB] py-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-4'>
            <Logo />
            <div className='flex items-center gap-4 mt-2'>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-facebook"
                />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-twitter"
                />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-instagram"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Links</h3>
            <ul>
              {headerData
                .filter((item) => item.label !== "More")
                .map((item, index) => (
                  <li key={index} className="mb-2 text-black/50 hover:text-primary w-fit">
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Other</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/about">
                  Vì sao Kiến Văn bán sách
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/support">
                  Support & FAQ
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/checkout">
                  Checkout
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/account">
                  Account
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/legal">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">Hà Nội, Việt Nam</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:phone"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">+84 000 000 000</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:folder"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">hello@kienvan.vn</h5>
            </div>
          </div>
        </div>

        <div className='mt-10 lg:flex items-center justify-between'>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>@2026 Kiến Văn. All Rights Reserved.</h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/legal" className='text-black/50 text-sm font-normal hover:text-primary'>Privacy policy</Link>
            <Link href="/legal" className='text-black/50 text-sm font-normal hover:text-primary'>Terms & conditions</Link>
          </div>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>Chọn sách đúng theo nhu cầu.</h4>
        </div>
      </div>
    </footer>
  )
}

export default footer;
