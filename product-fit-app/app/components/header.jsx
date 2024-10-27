import Image from "next/image";



const Header = () => {
    return (
        <header className="flex w-full vs:h-40 bg-gray-100">
            <Image
            src='images/mobilelogo.svg'
            width={318} // Ширина изображения
            height={77}
            />
        </header>
    );
};

export default Header;