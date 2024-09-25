import React from "react";
import Image from "next/image";

const ColorsPaletteProjectCard = () => {
    return (
        <section id="projects" className="mb-10">
            <div
                className="h-52 md:h-72 rounded-t-xl relative group flex text-center items-center justify-center transition-all"
                style={{
                    background: "#1B1A55",
                    opacity: "70%",
                }}
            >
                <div className="w-[200px] h-auto">
                    <Image
                        src="/hat.png"
                        priority
                        alt=""
                        className="p-4"
                        width={280}
                        height={300}
                    />
                </div>
                <div className="overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all ease-in duration-1000">
                    <a
                        href="https://randomcolors.lionstoretechnology.com/"
                        target="blank"
                        className="p-3 h-20 w-20 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
                    >
                        <i>
                            <img src="/eye.png" alt="" />
                        </i>
                    </a>
                </div>
            </div>
            <div className="rounded-b-xl mt-3 bg-[#222333] py-6 px-2">
                <h5 className="text-[30px] text-cyan-200 font-semibold mb-2 flex justify-center items-center text-center">
                    Random Colors Palette
                </h5>
                <p className="text-[#ADB7BE] pb-3 text-center px-3">
                    Random Colors Palette es un sitio web que pretende ser una forma sencilla y fácil de explorar distintos colores generados de manera aleatoría, los cuales pueden ser copiados en formato hexadecimal o RGB.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <div className="w-[230px] flex justify-center items-center">
                        <a
                            href="https://randomcolors.lionstoretechnology.com/"
                            target="_blank"
                        >
                            <button className="px-4 py-2 mt-2 rounded-xl text-[20px] font-semibold bg-blue-600 hover:bg-blue-500">
                                Visitar
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorsPaletteProjectCard;
