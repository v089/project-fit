import Image from "next/image";

const Agitation = () => {
    return (
        <div className="flex vs:flex-col ts:flex-row justify-center items-center vs:mt-[33px] ts:gap-[5%] ns:gap-[105px]">
            <Image
                className="vs:hidden ts:block"
                src='images/image2.svg'
                width={606} // Ширина изображения
                height={508}
                alt="none"
            />
            <div className="flex flex-col vs:justify-center vs:items-center ts:justify-start ts:items-start vs:w-[377px] ts:w-[371px]">
                <h1 className="vs:text-center ts:text-left textfont-[var(--font-family)] font-bold text-[30px] leading-[125%] uppercase text-center text-[#1e959b] w-[377px]">Проведём интервью
                    и подготовим проект
                    к разработке</h1>
                <p className="w-[331px] vs:mr-[42px] mt-[27px] ts:mr-0">Проведём продуктовое интервью онлайн
                    и дадим рекомендации по подготовке проекта
                    к разработке. <b>Это бесплатно.</b></p>
                <Image
                    className="ts:hidden mt-[27px]"
                    src='images/Group44.svg'
                    width={374} // Ширина изображения
                    height={313}
                    alt="none"
                />
                <button className="vs:mt-[52px] ts:mt-[44px] w-[257px] h-[70px] rounded-[20px] font-[var(--font-family)] font-bold text-[16px] uppercase text-[#fff] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]">записаться на интервью</button>
            </div>
        </div>
    );
};
export default Agitation;
