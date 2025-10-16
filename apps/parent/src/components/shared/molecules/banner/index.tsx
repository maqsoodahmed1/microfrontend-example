import { cn } from "../../../../helpers/general.helpers";
import { WelcomeToDP, BannerBg } from "../../../../assets/images";
import { Button } from "antd";
import { UploadStackIcon } from "../../../../assets/icons";

interface IBannerProps {
    title: string;
    description?: string;
    buttonText: string;
    onButtonClick?: () => {},
    className?: string
}

export default function Banner({ className, title, description, buttonText, onButtonClick }: IBannerProps) {
    return (
        <div
            className={cn("flex flex-col relative justify-end bg-cover bg-center w-full h-[130px] rounded-t-3xl", className)}
            style={{ backgroundImage: `url(${BannerBg})` }}
        >
            <div className="pl-7 pb-10 pr-4 md:pb-5 relative z-10">
                <h1 className="text-black text-2xl font-semibold !mb-0">
                    {title}
                </h1>
                <p className="text-dp-gray-blue font-semibold text-sm !m-0">{description}</p>
                <Button icon={<UploadStackIcon className="text-white" />} onClick={onButtonClick} className="!bg-dp-blue !rounded-lg !text-white !border-0 !px-7 !mt-2 !py-5">{buttonText}</Button>
            </div>

            <img className="absolute right-0 max-w-[170px] md:max-w-[330px]" src={WelcomeToDP} />
        </div>
    )
}
