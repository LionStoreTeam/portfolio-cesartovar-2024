"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
const Welcome = () => {
    return (
        <section className="mt-10 px-4 flex flex-col justify-center items-center text-center md:flex md:flex-row md:gap-20">
            {/* Text Content */}
            <div className="mb-5 flex flex-col bg-blue-700 bg-opacity-10 rounded-xl md:w-[500px] lg:w-[650px] xl:w-[800px]">

                <h1 className='text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 md:text-[30px] md:font-extrabold'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Cesar Tovar',
                            1000,
                            'Desarrollador',
                            1000,
                            'Web',
                            1000,
                            'Móvil',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-[18px] md:text-[22px] md:font-semibold'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Soy un desarrollador versátil con una sólida base en diseño de interfaces y desarrollo de aplicaciones móviles y web. Mis habilidades con Figma me permiten crear maquetas atractivas y funcionales que mejoran la experiencia del usuario. En el ámbito móvil, uso tecnologías como Dart, Flutter y Android Studio para construir aplicaciones eficientes y de alto rendimiento. En desarrollo web, domino herramientas y tecnologías como HTML, CSS, JavaScript, TypeScript, React y Next.js, integrando bases de datos SQL a través de Prisma ORM. Con conocimientos avanzados de Git y GitHub, aseguro flujos de trabajo bien organizados y colaborativos. Mi enfoque es siempre crear soluciones innovadoras que combinen a la perfección diseño y tecnología.',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </p>
            </div>
            {/* Image Content */}
            <div className="avatar p-4 bg-gradient-to-r from-blue-700 to-blue-950 bg-opacity-90 rounded-xl">
                <Image src="/me.jpeg" alt='' width={180} height={180} />
            </div>
        </section>
    );
}

export default Welcome;