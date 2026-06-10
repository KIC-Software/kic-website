import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About | KIC Software",
  description:
    "Learn about KIC Software—a digital product studio building modern websites, interfaces, and custom business tools.",
};

export default function AboutPage() {
  return <AboutContent />;
}
