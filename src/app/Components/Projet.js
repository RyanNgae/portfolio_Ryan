import Image from "next/image";

export default function Projet({ projet }) {
  return (
    <div className="w-[50em] h-[35em] mx-auto  mt-10 ">
      <div className="mx-auto w-[30em] text-center font-serif text-slate-600 font-semibold mt-5">
        {projet.titre}
      </div>

      <Image
        className="w-[15em] h-[12em]  mt-7 rounded-lg mx-auto"
        height={300}
        width={250}
        src={"./img/" + projet.illustration}
      />

      <div className="w-full text-justify mt-8 mx-auto ">
        <span className=" font-serif tracking-wide text-justify">
          {projet.description}
        </span>
      </div>
    </div>
  );
}
