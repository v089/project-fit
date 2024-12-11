import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex vs:flex-col w-full vs:bg-gray-100 ts:bg-gray-200 vs:justify-center vs:items-center vs:mt-[66px] vs:h-[403px]" >
            <div className="flex vs:flex-row vs:gap-[77px] text-[#1E959B] vs:mt-[24px]">
                <a>Перейти к сайту</a>
                <a>Главная страница</a>
            </div>
            <a className="text-[#1E959B] font-bold vs:mt-[35px]">Связаться с нами</a>
            <div className="flex vs:flex-row vs:gap-[30px] vs:mt-[36px]">
                <Image
                    src='images/Group73.svg'
                    width={127.97}
                    height={31.69}
                />
                <a href="#">
                    <Image
                        src='images/svg-editor-image-7.svg'
                        width={46.29}
                        height={35}
                        alt="none"
                    />
                </a>
                <a href="#">
                    <Image
                        src='images/svg-editor-image-6.svg'
                        width={46.29}
                        height={35}
                        alt="none"
                    />
                </a>
            </div>
            <div className="flex vs:mt-[34px] vs:gap-[17px] ts:gap-[20px]">
                <Image
                    src='images/Group61.svg'
                    width={59.9}
                    height={64}
                />
                <p className="vs:w-[251px] vs:text-[12px]">
                    Индивидуальный предприниматель
                    Степанов Георгий Константинович
                    Адрес: г. Обнинск, ул. Белкинская. 19,
                    136 ОГРНИП 318402700019269 ИНН
                    402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ
                    АО КБ "МОДУЛЬБАНК"
                    БИК 044525092 К/c 30101810645250000092
                    Счет 40802810970010085488
                </p>
            </div>
            <p className="text-[#3C3C3C] vs:mt-[40px] ts:mt-[5px]">Copyright © 2021 ProductFit</p>
        </footer>
    );
};

export default Footer;