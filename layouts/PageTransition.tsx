"use client"

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface IPageTransitionProps {
    children: ReactNode;
    animationVariants: Variants;
}

const PageTransition = ({
    children,
    animationVariants,
}: IPageTransitionProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
