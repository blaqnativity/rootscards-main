import Image from "next/image";

const DetailCard = () => {
  return (
    <div className="p-6 space-y-5">
      {/* title */}
      <h2 className="hFour">Toviz Apartment</h2>
      {/* location */}
      <div className="flex items-center gap-2">
        <Image src="/location.png" alt="Location Icon" width={16} height={16} />
        <p className="text-[#666666] font-medium">
          Dominion Plaza, Eleganza, Lekki - Epe Expressway
        </p>
      </div>
      {/* price */}
      <p className="hThree">₦40,000 / night</p>
      {/* booking button */}
      <button className="text-center bg-black text-white p-3 font-semibold rounded-full w-full">
        Book
      </button>
    </div>
  );
};

export default DetailCard;
