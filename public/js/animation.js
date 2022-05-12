export const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            ease: easing
        }
    },
}

export const fadeIn = {
    initial: {
        y: 0,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: easing
        }
    },
}

//to wait 0.1 for the next child
export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}