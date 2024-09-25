import React from "react";
import Image from "next/image";

const QuizRiddlesProjectCard = () => {
    return (
        <section id="projects" className="mb-10 mt-10">
            <div
                className="h-52 md:h-72 rounded-t-xl relative group flex text-center items-center justify-center transition-all"
                style={{
                    background: "#1B1A55",
                    opacity: "70%",
                }}
            >
                <div className="">
                    <Image
                        src="/Quiz_Riddles_Logo.svg"
                        priority
                        fill
                        alt=""
                        className="p-4"
                    />
                </div>
                <div className="overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all ease-in duration-1000">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.lionstore.quiz_riddles"
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
                <h5 className="text-[30px] text-pink-200 font-semibold mb-2 flex justify-center items-center text-center">
                    Quiz Riddles: Exámenes
                </h5>
                <p className="text-[#ADB7BE] pb-3 text-center px-3">
                    Pratica con más de{" "}
                    <span className="text-pink-100 font-semibold">
                        20 Áreas de Estudio{" "}
                    </span>
                    y más de{" "}
                    <span className="text-pink-100 font-semibold">1 200 preguntas </span>
                    con nuestros{" "}
                    <span className="text-pink-100 font-semibold">
                        Simuladores de Examen de Admisión{" "}
                    </span>
                    para <span className="border-b border-slate-200">Universidad</span> y{" "}
                    <span className="border-b border-slate-200">Preparatoria.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <div className="w-[230px] flex justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.lionstore.quiz_riddles"
                            target="_blank"
                        >
                            <Image
                                src="/playstore.svg"
                                height={220}
                                width={220}
                                className="hover:brightness-200"
                                alt="play_badge"
                                priority
                            />
                        </a>
                    </div>
                    <div className="w-[230px] flex justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.lionstore.quiz_riddles"
                            target="_blank"
                        >
                            <Image
                                src="/appgallery.svg"
                                height={220}
                                width={220}
                                className="hover:brightness-200"
                                alt="huawei_badge"
                                priority
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizRiddlesProjectCard;
