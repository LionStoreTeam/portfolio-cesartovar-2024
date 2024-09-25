import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-[4rem] flex justify-center items-center text-center bg-blue-700 bg-opacity-10 md:justify-start md:pl-10">
            <Image src="/logo-W-T.svg" alt="" width={45} height={50} />
            <h1 className="pl-3 text-[30px] font-semibold">Cesar Tovar</h1>
        </div>
    );
}

export default Navbar;