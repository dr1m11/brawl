import { useState, useEffect } from 'react';

export default function useResize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                width: window.innerWidth,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize.width;
}

