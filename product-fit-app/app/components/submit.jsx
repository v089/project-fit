import Image from "next/image";

const Submit = () => {
    return (
        <div className="flex vs:flex-col ts:flex-row vs:mt-[90px] vs:justify-center vs:items-center">
            <Image
                className=""
                src='images/Group1234.svg'
                width={352} // Ширина изображения
                height={344}
                alt="none"
            />
            <button className="vs:mt-[53px] w-[329px] h-[99px] rounded-[20px] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)] font-bold text-[24px] uppercase text-center text-[#fff]">оставить заявку</button>
        </div>
    )
}
export default Submit; 