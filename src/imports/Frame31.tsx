import imgImage3 from "figma:asset/9eb54bfd403b25b9ab8936b38652dc53e0f59595.png";

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[66.56px] size-full">
      <div className="absolute bg-[#96be39] left-0 size-[256px] top-0" />
      <div className="absolute left-[-157px] size-[430px] top-[-74px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}