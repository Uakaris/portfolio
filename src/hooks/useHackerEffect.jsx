import { useEffect } from 'react';

export const useHackerEffect = (selector) => {
    const triggerEffect = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const element = document.querySelector(selector);

        if (element) {
            let iterations = 0;

            const interval = setInterval(() => {
                element.innerText = element.innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return element.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * letters.length)];
                    }).join("");

                if (iterations >= element.dataset.value.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 1.8;
            }, 45);
        }
    };

    // Trigger the effect on initial load
    useEffect(() => {
        triggerEffect();
    }, [selector]);

    return triggerEffect;
};