import React from "react";
import Image from "next/image";

const LionStoreProjectCard = () => {
    return (
        <section id="projects" className="mb-10">
            <div
                className="h-52 md:h-72 rounded-t-xl relative group flex text-center items-center justify-center transition-all"
                style={{
                    background: "#1B1A55",
                    opacity: "70%",
                }}
            >
                <div className="w-[250px] h-auto">
                    <Image
                        src="/SinFondoLionStoreBlue500.png"
                        priority
                        alt=""
                        className="p-4"
                        width={350}
                        height={300}
                    />
                </div>
                <div className="overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all ease-in duration-1000">
                    <a
                        href="https://lionstoretechnology.com"
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
                    Lion Store Technology
                </h5>
                <p className="text-[#ADB7BE] pb-3 text-center px-3">
                    Lion Store Technology es un equipo de desarrollo tecnológico multiplataforma, enfocado en crear Aplicaciones para dispositivos Móviles y para la Web que faciliten el aprendizaje, la interacción y la motivación en temas educativos, escolares y de conocimiento.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <div className="w-[230px] flex justify-center items-center">
                        <a
                            href="https://lionstoretechnology.com"
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

export default LionStoreProjectCard;
