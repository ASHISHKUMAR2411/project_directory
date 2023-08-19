import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import { type } from 'os'
import Link from 'next/link'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => 
                <Link href="/" key={link}>{link}</Link>
            )}
        </ul>
    </div>

)

const Footer = () => {
    return (
        <footer className = "flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src="/logo-purple.svg"
                        alt="Flexibble"
                        width={115}
                        height={38}
                    />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        Flex is a community of students and developers sharing their work, process, and current projects. Sign up for free to join them.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                    {footerLinks.map((link, index) => (
                        <div key={index} className="flex-1 flex flex-col gap-4">
                            <FooterColumn title={link.title} links={link.links} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>@2023 Ashish Kumar. All Rights Reserved</p>
                <p className="text-gray">
                    <span className="text-black">12</span> projects submitted
                </p>
            </div>
        </footer>
    )
}

export default Footer