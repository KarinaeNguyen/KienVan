import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src= {`${getImagePrefix()}images/logo/logo.svg`}
        alt="logo"
        width={120}
        height={40}
        className="h-10 w-auto"
        quality={100}
      />
    </Link>
  );
};

export default Logo;
