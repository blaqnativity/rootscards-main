import { images } from "@/constants";
import Image from "next/image";

export const Ratings = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="screen-container md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* image div */}
        <div>
          <Image
            src={images.ratings}
            alt="ratings showcase"
            className="rounded-2xl object-cover w-full"
          />
        </div>

        {/* text div */}
        <div className="flex flex-col gap-6 max-w-fit">
          <div className="flex flex-col gap-4">
            <span className="hFive uppercase tracking-wide text-gray-500">
              BUSINESS FEEDBACK
            </span>
            <h3 className="hTwo font-bold">Success Stories</h3>
            <p className=" hFive text-gray-600 w-2/3 md:max-w-xs">
              Mirrors your current process—just faster, auditable, and less
              human error.
            </p>

            {/* stats */}
            <div className="flex items-start gap-12">
              <div className="flex flex-col gap-2">
                <span className="hThree font-bold">+42%</span>
                <span className="hFive text-gray-600">
                  Average income growth
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="hThree font-bold">5.0</span>
                <span className="hFive text-gray-600">Feedback rating</span>
              </div>
            </div>
          </div>

          {/* line */}
          <div className="border-t border-gray-300 w-full"></div>

          {/* testimonial */}
          <div className="flex flex-col gap-4">
            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
            <p className="hFive text-gray-700 w-2/3">
              “Cleaning SLAs improved because tasks fire themselves.”
            </p>
            <div className="flex items-center gap-3">
              <img
                src={images.avatar}
                alt="Bisi Oladejo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="hFour block">BISI OLADEJO</span>
                <span className="hFive text-gray-500">OPS Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
