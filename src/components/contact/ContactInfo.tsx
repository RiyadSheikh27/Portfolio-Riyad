import { FC } from "react"
import { IconType } from "react-icons"

interface ContactInfoProps {
    label: string,
    icon: IconType,
    value: string
}

const ContactInfo: FC<ContactInfoProps> = ({ label, icon: Icon, value }) => {
    return (
        <div className="flex gap-6 group justify-start items-center p-6 bg-[#1a2436e6] border border-sec-color rounded-lg">
            <div className="flex items-center justify-center text-2xl font-black duration-1000 rounded-full w-14 h-14 bg-sec-color text-main-color group-hover:bg-main-color group-hover:text-sec-color">
                <Icon />
            </div>
            <div className="space-y-3">
                <h3 className="text-xl font-bold">{label}</h3>
                <p className="text-desc-color">{value}</p>
            </div>
        </div>
    )
}

export default ContactInfo
