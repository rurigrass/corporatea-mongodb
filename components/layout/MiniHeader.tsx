import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

type MiniHeaderProps = {
  showBackArrow?: boolean;
  label: string;
};

const MiniHeader = ({ showBackArrow, label }: MiniHeaderProps) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className=" border-b-[1px] border-gray-gray p-3">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="
          cursor-pointer 
          hover:opacity-70 
          transition
          "
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default MiniHeader;
