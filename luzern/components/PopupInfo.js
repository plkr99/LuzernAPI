import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const MoreInfo = ({ data }) => (
  <div
    className={cn(
      "relative w-full text-center min-[830px]:w-[300px] h-fit space-y-1 border bg-white p-4 md:p-8 shadow-2xl"
    )}
  >
    <h1 className="text-2xl">Durchschnittliche tägliche Auslastung</h1>
    <p className="text-5xl">{data}</p>
  </div>
);
export default function PopupInfo({
  title,
  description,
  image,
  setIsOpen,
  itemsLength,
  average,
}) {
  const handleClose = () => {
    setIsOpen(undefined);
  };
  const prevItem = () => {
    setIsOpen((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : itemsLength - 1));
  };
  const nextItem = () => {
    setIsOpen((prevIndex) => (prevIndex < itemsLength - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex flex-col w-full min-[830px]:w-fit items-center justify-center p-1 min-[830px]:my-5 min-[830px]:mx-8 lg:my-10 lg:mx-16">
        <div className="relative w-full min-[830px]:w-[428px] h-full space-y-4 border bg-white p-4 md:p-8 shadow-2xl overflow-y-scroll transition">
          <XMarkIcon
            className="sticky size-8 cursor-pointer ml-auto top-0 right-0  bg-black text-white p-1 rounded-full z-10"
            onClick={handleClose}
          />
          <div className="relative w-full">
            <ArrowLeftIcon
              className="p-2 bg-white rounded-full cursor-pointer drop-shadow-md size-7 absolute inset-y-0 my-auto -left-4"
              onClick={prevItem}
            />
            <Image
              src={`/${image}.png`}
              alt={title}
              width={364}
              height={270}
              className="w-full object-cover"
            />
            <ArrowRightIcon
              className="p-2 bg-white rounded-full cursor-pointer drop-shadow-md size-7 absolute inset-y-0 my-auto -right-4"
              onClick={nextItem}
            />
          </div>
          <h1 className="text-4xl">{title}</h1>
          <p className="text-wrap">{description}</p>
        </div>
        <div className="block w-full min-[830px]:hidden mt-2">
          <MoreInfo data={average} />
        </div>
      </div>
      <div className="hidden min-[830px]:flex fixed inset-y-0 my-auto right-0 ml-auto  min-[830px]:w-fit h-fit items-center justify-center p-1 min-[830px]:mx-8 lg:mx-16">
        <MoreInfo data={average} />
      </div>
    </div>
  );
}
