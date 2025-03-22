import { AppSmoothBox } from "@/StopTheLeak/shared/ui/AppSmoothBox"
import styles from "./ProductCard.module.scss"
import type { ReactNode } from "react"
import { AppVideo } from "@/StopTheLeak/shared/ui/AppVideo"

type TProductCardProps = {
    src: any
    alt: string
    header: ReactNode
    description: ReactNode
    buttonText: string
    href: string
    withVideo?: boolean
}

export function ProductCard(props: TProductCardProps) {
    const { alt, src, description, buttonText, header, href, withVideo } = props
    return (
        <AppSmoothBox cornerRadius={30} cornerSmoothing={1} className={styles.card}>
            <AppSmoothBox className={styles.imageContainer} cornerRadius={20} cornerSmoothing={1}>
                {withVideo ? <AppVideo src={src} autoPlay className={styles.video} /> : <img src={src} alt={alt} />}
            </AppSmoothBox>

            <div className={styles.content}>
                {header}

                {description}

                <a href={href} className={styles.link} target="_blank" rel="noindex nofollow">
                    {buttonText}
                </a>
            </div>
        </AppSmoothBox>
    )
}
