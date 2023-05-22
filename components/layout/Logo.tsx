import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div
        className="
        rounded-full
        h-full
        p-2
        flex
        items-center
        justify-center
        hover:bg-blue_ct-tintish_ct
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
