import Image from "next/image";
import Link from "next/link";



const Header = () => {
    return (
        <header className="flex w-full vs:h-40 bg-[#F8FFFF] vs:justify-center ts:h-[120px] items-center ts:pl-[60px] ts:pr-[60px] ns:p-0">
            <Image
                className="ts:hidden"
                src='images/mobilelogo.svg'
                width={318} // Ширина изображения
                height={77}
                alt="none"
            />
            <Image
                className="vs:hidden ts:block ns:block mr-[242px]"
                src='images/Logo.svg'
                width={239}
                height={58}
                alt="none"
            />
            <a href="#">
                <Image
                    className="vs:hidden ts:block ns:block mr-[57.71px]"
                    src='images/svg-editor-image-7.svg'
                    width={46.29}
                    height={35}
                    alt="none"
                />
            </a>
            <a href="#">
                <Image
                    className="vs:hidden ts:block ns:block mr-[57.71px]"
                    src='images/svg-editor-image-6.svg'
                    width={46.29}
                    height={35}
                    alt="none"
                />
            </a>
            <Image
                className="vs:hidden ts:block ns:block mr-[58px]"
                src='images/Group65.svg'
                width={160}
                height={31.68}
                alt="none"
            />
            <Link href='login'><button className="vs:hidden ts:block ns:block w-[186.78px] h-[62.26px] bg-[#F05670] rounded-[15px] text-[#fff]">Авторизоваться</button></Link>

        </header>
    );
};

export default Header;