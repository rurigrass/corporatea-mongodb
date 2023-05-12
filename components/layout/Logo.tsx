import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div
        className="
        rounded-full
        h-full
        p-4
        flex
        items-center
        justify-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition
        font-bold
        "
      >
        Corporatea
      </div>
    </Link>
  );
};

export default Logo;
