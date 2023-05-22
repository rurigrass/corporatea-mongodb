import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div
        className="
        rounded-full
        h-full
        py-2
        px-3
        flex
        items-center
        justify-center
        hover:bg-blue_ct-tintish_ct
        hover:bg-opacity-10
        cursor-pointer
        transition
        text-2xl
        font-bold
        "
      >
        Corporatea
      </div>
    </Link>
  );
};

export default Logo;
