import Image from "next/image";


const Start = () => {
    return (
        <div className="flex vs:flex-col ts:flex-row justify-center items-center z-10 ns:gap-[94px]">
            <div className="flex flex-col vs:justify-center vs:items-center ts:items-start">
                <h1 className="text-[#1E959B] font-bold vs:w-[236px] vs:text-center ts:text-left vs:mt-[24px] ts:mt-[114px] text-[32px]">РАЗРАБОТКА IT-ПРОДУКТОВ</h1>
                <p className="vs:w-[320px] vs:text-[14px] ts:text-[16px] vs:mt-[14px] ts:mt-[16px] z-10">Разработаем проект с нуля,
                    доработаем текущий проект или усилим вашу
                    ИТ-команду лучшими разработчиками на рынке</p>
                <button className="rounded-[20px] w-[232px] h-[70px] bg-[#F05670] text-[#fff] vs:mt-[152px] ts:mt-[50px] z-10">НАЧАТЬ НОВЫЙ ПРОЕКТ</button>
                <Image
                    className="ts:hidden z-0 absolute mt-[325px]"
                    src='images/Group1890.svg'
                    width={411} // Ширина изображения
                    height={340}
                    alt="none"
                />
            </div>
            <Image
                className="ts:block vs:hidden mt-[30px]"
                src='images/Frame.svg'
                width={621} // Ширина изображения
                height={509}
                alt="none"
            />
        </div>
    );
}

export default Start; 