import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Facebook, Instagram, Linkedin, Mail, MapPin, Package, Phone, Waves} from "lucide-react";

import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Navigation */}
            <nav
                className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-border border-b">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-50 h-14">
                                <Image
                                    src="./images/logo.png"
                                    alt="Basket Of Life logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="#services"
                                className="text-muted hover:text-foreground transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                className="text-muted hover:text-foreground transition-colors"
                            >
                                Contact
                            </Link>
                            <Button size="sm" asChild className="rounded-full">
                                <Link href="#contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="relative overflow-hidden bg-gradient-to-b from-background via-emerald-50 to-background py-16 lg:py-24">
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18)_0,_transparent_55%)]"/>

                <div className="relative mx-auto px-4 sm:px-6 lg:px-8 container">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        {/* Text side */}
                        <div className="space-y-6">
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          About Basket Of Life
        </span>

                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                                Science-driven, nature-friendly packaging
                            </h2>

                            <p className="text-muted text-lg leading-relaxed">
                                Basket of Life is a Jordanian startup that combines science, innovation, and
                                sustainability to develop smart solutions for preserving fresh agricultural products.
                            </p>

                            <p className="text-muted text-lg leading-relaxed">
                                We are a team of researchers and agricultural engineers dedicated to reducing food waste
                                through eco-friendly smart packaging that helps farmers, exporters, and consumers
                                maintain the quality of their produce for longer.
                            </p>
                        </div>

                        {/* Image side */}
                        <div className="relative max-w-md mx-auto w-full">
                            <div className="absolute -inset-4 rounded-[2.5rem] bg-emerald-200/40 blur-2xl"/>
                            <div className="relative rounded-[2rem] bg-emerald-50 shadow-xl p-4">
                                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                                    <Image
                                        src="/images/hero-basket-of-life.jpeg"
                                        alt="Basket of Life exhibition booth with smart packaging"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="mt-3 text-xs text-emerald-900/70 text-center">
                                    Basket Of Life showcasing eco-friendly smart packaging solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="mission" className="bg-background py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
                    <div className="space-y-4 mb-16 text-center">
                        <h2 className="font-bold text-3xl lg:text-4xl text-balance">
                            Our Mission
                        </h2>
                        <p className="mx-auto max-w-3xl text-muted-foreground text-lg lg:text-xl leading-relaxed">
                            Empowering the agricultural sector with simple and effective environmental technology that
                            reduces waste, increases export opportunities, and positively impacts farmers’ income and
                            environmental protection.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-card py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
                    <div className="space-y-4 mb-16 text-center">
                        <h2 className="font-bold text-3xl lg:text-4xl text-balance">
                            Our Products & Services
                        </h2>
                    </div>

                    <div className="gap-6 grid md:grid-cols-2">
                        <Card className="hover:shadow-lg border-border transition-shadow">
                            <CardHeader>
                                <div
                                    className="flex justify-center items-center bg-accent/10 mb-4 rounded-lg w-12 h-12">
                                    <Package className="w-6 h-6 text-emerald-700"/>
                                </div>
                                <CardTitle className="text-xl">MNR Mix</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    <div className="space-y-2">
                                        <p>
                                            We also provide farmers and exporters with the active substance separately,
                                            for use in packages or storage rooms, at special prices to support local
                                            production.
                                        </p>
                                        <p className="font-bold">
                                            Our Services
                                        </p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Technical consultation for farmers and exporters.</li>
                                            <li>Technical support in smart packaging processes.</li>
                                            <li>Training workshops on post-harvest techniques.</li>
                                            <li>Customized solutions based on crop type and market needs.</li>
                                        </ul>
                                    </div>
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg border-border transition-shadow">
                            <CardHeader>
                                <div
                                    className="flex justify-center items-center bg-accent/10 mb-4 rounded-lg w-12 h-12">
                                    <Waves className="w-6 h-6 text-emerald-700"/>
                                </div>
                                <CardTitle className="text-xl ">Basket of Life Packaging</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    <div className="space-y-2">
                                        <p>
                                            Innovative packages made from recycled cardboard, containing a natural
                                            substance called MNR Mix, which:
                                        </p>

                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Absorbs ethylene gas, slowing down ripening.</li>
                                            <li>Prevents bacterial growth, extending shelf life.</li>
                                        </ul>
                                        <p className="font-bold">
                                            Packaging Benefits:
                                        </p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Biodegradable and environmentally friendly.</li>
                                            <li>Reduces damage and loss during storage and transport.</li>
                                            <li>Preserves the natural color, texture, and taste of produce.</li>
                                            <li>Equipped with ventilated openings for optimal moisture balance.</li>
                                            <li>Customizable in design and size according to crop type.</li>
                                        </ul>
                                    </div>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-background/80 py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
                    <div className="items-center gap-12 grid lg:grid-cols-[1.2fr_minmax(0,0.9fr)]">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-balance">
                                    We welcome your inquiries anytime!
                                </h2>
                                <p className="text-muted text-lg lg:text-xl leading-relaxed">
                                    Whether you are a farmer, exporter, supporting organization,
                                    or researcher interested in agricultural innovation, we are
                                    excited to collaborate with you for a more sustainable future.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-between items-center gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex justify-center items-center bg-accent/10 rounded-xl w-12 h-12">
                                        <Mail className="w-6 h-6 text-emerald-700"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email</h3>
                                        <p className="text-muted">
                                            <a href="mailto:Basketoflif0@gmail.com">
                                                Basketoflif0@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex justify-center items-center bg-accent/10 rounded-xl w-12 h-12">
                                        <Phone className="w-6 h-6 text-emerald-700"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Phone</h3>
                                        <p className="text-muted">
                                            <a href="tel:+962795479757">+962 7 95479757</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex justify-center items-center bg-accent/10 rounded-xl w-12 h-12">
                                        <MapPin className="w-6 h-6 text-emerald-700"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Location</h3>
                                        <p className="text-muted">Amman – Jordan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="hidden lg:block border-border/60 bg-background/80 rounded-2xl shadow-lg">
                            <CardHeader>
                                <CardTitle>Share Your Needs</CardTitle>
                                <CardDescription>
                                    Tell us how you would like to collaborate with Basket of Life.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="py-3 space-y-3 text-sm text-muted">
                                <p>• Support for farmers or cooperatives</p>
                                <p>• Export or buyer partnerships</p>
                                <p>• Research and innovation collaboration</p>
                                <p>• Sustainability and impact programs</p>
                                <p className="pt-2 text-xs text-muted">
                                    Reach out and we&apos;ll respond with tailored options and
                                    next steps.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-card py-12">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
                    <div className="gap-8 grid md:grid-cols-4 items-start">
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="relative w-30 h-20">
                                    <Image
                                        src="./images/logo.png"
                                        alt="Basket Of Life"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-muted leading-relaxed">
                                A fresh, farmer-centered approach to agriculture—linking fields,
                                markets, and innovation to create thriving, sustainable food
                                systems.
                            </p>
                        </div>

                        <div className="space-y-4 py-5">
                            <h3 className="font-semibold">Services</h3>
                            <ul className="space-y-2 text-muted text-sm">
                                <li>Farmer Support & Training</li>
                                <li>Quality & Export Readiness</li>
                                <li>Logistics & Cold Chain</li>
                                <li>Data & AI Crop Insights</li>
                            </ul>
                        </div>

                        <div className="space-y-4 py-5">
                            <h3 className="font-semibold">Contact</h3>
                            <div className="space-y-2 text-muted text-sm">
                                <p>Amman, Jordan</p>
                                <p>
                                    <a href="tel:+962795479757">+962 7 95479757</a>
                                </p>
                                <p>
                                    <a href="mailto:Basketoflif0@gmail.com">
                                        Basketoflif0@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 py-5">
                            <h3 className="font-semibold">Follow Us</h3>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.facebook.com/share/1HCW95THdD/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition text-emerald-700"
                                >
                                    <Facebook className="w-5 h-5"/>
                                </a>

                                <a
                                    href="https://www.instagram.com/basketoflife0?igsh=MW8zdXF6cjNoMG5ucQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition text-emerald-700"
                                >
                                    <Instagram className="w-5 h-5"/>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/basket-of-life-309b68369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition text-emerald-700"
                                >
                                    <Linkedin className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-8 pt-8 border-primary-foreground/20 border-t text-muted text-center text-xs md:text-sm">
                        <p>
                            &copy; 2025 Basket Of Life. All rights reserved. | Built for
                            sustainable agriculture and inclusive growth.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
