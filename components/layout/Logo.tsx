import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div
        className="
        rounded-full
        h-full
        py-2
        flex
        items-center
        justify-center
        hover:bg-blue-tintish
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
