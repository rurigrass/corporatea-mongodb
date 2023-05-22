import cup from "../public/images/cup.png";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="flex items-center  dark:bg-slate_ct bg-pink_ct-tintier_ct px-10 py-10">
        <div className="lg:w-1/3 w-1/2 flex justify-center">
          <h1 className=" text-white_ct text-6xl max-w-xl font-montserrat font-bold">
            Spill the tea
          </h1>
        </div>
        <div className="lg:w-1/3 w-1/2 flex justify-center">
          <Image src={cup} alt="cup" priority={true} />
        </div>
        <div className="hidden lg:w-1/3 lg:flex lg:justify-center">
          <h2 className="  text-white_ct text-4xl font-montserrat font-semibold">
            on your{" "}
            <span className="underline decoration-white decoration-3 hover: cursor-pointer hover:text-green_ct-green_ct hover:decoration-green">
              company
            </span>
          </h2>
        </div>
      </div>
      <div className="lg:hidden dark:bg-slate_ct bg-blue_ct-tintish_ct py-3 text-center">
        <h2 className="text-white_ct text-3xl sm:text-4xl font-montserrat font-semibold">
          on your{" "}
          <span className="underline decoration-3 hover:cursor-pointer hover:text-green_ct-green_ct hover:decoration-green-green">
            company
          </span>
        </h2>
      </div>
    </>
  );
};

export default Banner;
