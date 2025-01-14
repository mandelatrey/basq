import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";

const footerLinks = [
    { href: "#", label: "Contact", index: 1 },
    { href: "#", label: "Privacy Policy", index: 2 },
    { href: "#", label: "Terms & Conditions", index: 3 },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div className="max-w-sm">
                        <Image
                            src={logoImage}
                            alt="basq logo"
                            width={125}
                            className="h-auto"
                        />
                    </div>

                    <div className="">
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    href={link.href}
                                    className="text-white/50 text-sm text-1xl "
                                    key={link.index}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div>
                        <h3 className="font-light text-1xl text-white/50">
                            Made with ❤️ by Trey
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
