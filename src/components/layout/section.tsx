import { ReactNode } from "react";

type SectionTone = "light" | "dark";
type SectionSpacing = "default" | "hero" | "cta";

type SectionProps = {
    id?: string;
    tone?: SectionTone;
    spacing?: SectionSpacing;
    className?: string;
    innerClassName?: string;
    children: ReactNode;
};

function getToneClasses(tone: SectionTone) {
    switch (tone) {
        case "dark":
            return "bg-[#111111] text-white";
        case "light":
        default:
            return "bg-[#efefef] text-[#111111]";
    }
}

function getSpacingClasses(spacing: SectionSpacing) {
    switch (spacing) {
        case "hero":
            return "pt-24 pb-24 lg:pt-32 lg:pb-32";
        case "cta":
            return "py-24 lg:py-32";
        case "default":
        default:
            return "py-20 lg:py-28";
    }
}

export function Section({
                            id,
                            tone = "light",
                            spacing = "default",
                            className = "",
                            innerClassName = "",
                            children,
                        }: SectionProps) {
    return (
        <section
            id={id}
            className={`${getToneClasses(tone)} ${className}`.trim()}
        >
            <div
                className={`mx-auto max-w-7xl px-6 lg:px-10 ${getSpacingClasses(
                    spacing
                )} ${innerClassName}`.trim()}
            >
                {children}
            </div>
        </section>
    );
}