import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex vs:flex-col w-full vs:bg-gray-100 ts:bg-[#F9FBFE] vs:justify-center vs:items-center vs:mt-[66px] ts:mt-[84px] vs:h-[403px] ts:h-[242px] ts:pl-[60px] ts:pr-[60px] ns:p-0 vs:pb-[30px]" >
            <div className="flex vs:flex-col vs:justify-center vs:items-center ts:flex-row">
                <Image
                    className="vs:hidden ts:block"
                    src='images/Logo.svg'
                    width={239}
                    height={58}
                    alt="none"
                />
                <div className="flex vs:flex-row vs:gap-[77px] text-[#1E959B] vs:mt-[24px] ts:flex-col ts:gap-[22px] ts:ml-[40px] ts:mt-0">
                    <a>Перейти к сайту</a>
                    <a>Главная страница</a>
                </div>
                <div className="flex vs:flex-col vs:justify-center vs:items-center ts:justify-left">
                    <a className="text-[#1E959B] font-bold vs:mt-[35px] ts:mr-[85px] ts:mt-0">Связаться с нами</a>
                    <div className="flex vs:flex-row vs:gap-[30px] vs:mt-[36px] ts:mt-[14px] ts:gap-[24px] ts:ml-[45px]">

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
                </div>
                <div className="flex vs:mt-[34px] vs:gap-[17px] ts:gap-[20px] ts:ml-[40px]">
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

            </div>
            <p className="text-[#3C3C3C] vs:mt-[20px] ts:mt-[5px]">Copyright © 2021 ProductFit</p>
        </footer>
    );
};

export default Footer;