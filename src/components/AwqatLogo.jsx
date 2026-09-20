import { LucideMoonStar } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function AwqatLogo(){

    const { t } =useTranslation();

    return(
        <div className="flex gap-3 items-center">
            <div className="p-3 bg-primary rounded-xl">
                <LucideMoonStar className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
                <h2 className="font-heading text-xl">{ t('Awqat') }</h2>
                <p className="text-muted-foreground text-xs">{ t('Prayer_Times') }</p>
            </div>
        </div>
    );
}