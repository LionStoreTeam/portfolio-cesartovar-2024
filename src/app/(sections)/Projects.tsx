import ColorsPaletteProjectCard from "./(project_cards)/ColorsPalette";
import LionStoreProjectCard from "./(project_cards)/LionStore";
import QuizRiddlesProjectCard from "./(project_cards)/QuizRiddles";
import WorldCountriesProjectCard from "./(project_cards)/WorldCountries";

const Projects = () => {
    return (
        <section className="mt-10 px-4 flex flex-col justify-center items-center text-center">
            <div className="p-4 bg-blue-700 bg-opacity-20 rounded-xl">
                <h1 className="text-[40px] md:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">Mis Proyectos</h1>
            </div>
            <QuizRiddlesProjectCard />
            <LionStoreProjectCard />
            <WorldCountriesProjectCard />
            <ColorsPaletteProjectCard />
        </section>
    );
}

export default Projects;

