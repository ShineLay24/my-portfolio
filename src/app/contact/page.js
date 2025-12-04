"use client"

import { MailOutlined, GithubOutlined, LinkedinOutlined, FacebookOutlined, PhoneOutlined } from "@ant-design/icons"
import { FaGitlab, FaWhatsapp } from "react-icons/fa"

export default function ContactPage() {
    const iconStyle = "text-4xl cursor-pointer transition-transform hover:scale-125"

    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-blue-100 px-6">

            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <p className="text-lg text-gray-700 mb-10 text-center">
                Feel free to reach out for collaboration, internship opportunities, <br />
                or web development projects. I’ll get back to you as soon as possible.
            </p>

            <div className="flex flex-wrap gap-8 justify-center">

                {/* Email */}
                <a href="mailto:shinelay2499@gmail.com" target="_blank">
                    <MailOutlined className={`${iconStyle} text-red-500`} />
                </a>

                {/* GitHub */}
                <a href="https://github.com/ShineLay24" target="_blank">
                    <GithubOutlined className={`${iconStyle} text-black`} />
                </a>

                {/* GitLab */}
                <a href="https://gitlab.com/ShineLay24" target="_blank">
                    <FaGitlab className={`${iconStyle} text-orange-600`} />
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/htet-aung-shine-290a26368" target="_blank">
                    <LinkedinOutlined className={`${iconStyle} text-blue-600`} />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/share/1APuBCQ1dm/?mibextid=wwXIfr" target="_blank">
                    <FacebookOutlined className={`${iconStyle} text-blue-700`} />
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/6590169754" target="_blank">
                    <FaWhatsapp className={`${iconStyle} text-green-600`} />
                </a>

                {/* Phone Number */}
                <a href="tel:+959 788466678" target="_blank">
                    <PhoneOutlined className={`${iconStyle} text-gray-700`} />
                </a>

            </div>
        </main>
    )
}
