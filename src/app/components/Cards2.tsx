import React from 'react';
import Image from "next/image";

const Cards2 = () => {
  return (
    <div>
      <section className="pt-10 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -mx-4">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <Image
                  src="/albert-dera-ILip77SbmOE-unsplash.jpg"
                  alt="Description of the image"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-6 sm:p-7 md:p-8 text-center">
                  <h3>
                    <a
                      href="#"
                      className="
                        font-semibold
                        text-dark text-lg
                        sm:text-xl
                        md:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                      "
                    >
                      Vogue Street
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                    "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <Image
                  src="/kai-s-photography-DeUmcgcf3is-unsplash.jpg"
                  alt="Description of the image"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-6 sm:p-7 md:p-8 text-center">
                  <h3
                    className="
                      font-semibold
                      text-dark text-lg
                      sm:text-xl
                      md:text-[22px]
                      mb-4
                      block
                      hover:text-primary
                    "
                  >
                    Classic Elegance
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-danger hover:text-red
                      transition
                    "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <Image
                  src="/m-brauer-yEYmnaFuYVM-unsplash.jpg"
                  alt="Description of the image"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-6 sm:p-7 md:p-8 text-center">
                  <h3>
                    <a
                      href="#"
                      className="
                        font-semibold
                        text-dark text-lg
                        sm:text-xl
                        md:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                      "
                    >
                      Eco Couture
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                    "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards2;
