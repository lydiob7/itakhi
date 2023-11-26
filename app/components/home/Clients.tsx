import clsx from "clsx";
import Image from "next/image";
import { ComponentProps, FC } from "react";

interface ClientsProps extends ComponentProps<"div"> {}

const Clients: FC<ClientsProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("bg-grey py-12 md:py-20", className)} {...props}>
            <div className="container flex flex-col items-center gap-8 md:px-12 md:py-10">
                <p className="font-anton uppercase text-15 md:text-4xl text-center md:max-w-3xl">
                    They found happiness in design and development without the fuss, and you can too
                </p>

                <div className="flex gap-6 w-full flex-wrap justify-center md:flex-nowrap">
                    {/* <Image className="bg-[#00000030] w-1/3 object-cover h-14" src="" alt="" layout="fill" />
                    <Image className="bg-[#00000030] w-1/3 object-cover h-14" src="" alt="" layout="fill" />
                    <Image className="bg-[#00000030] w-1/3 object-cover h-14" src="" alt="" layout="fill" /> */}
                </div>
            </div>
        </div>
    );
};

export default Clients;
