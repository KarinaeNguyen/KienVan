import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/logo.jpg`}
        alt="Kiến Văn Books"
        width={186}
        height={76}
        className="h-16 w-auto object-contain"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
