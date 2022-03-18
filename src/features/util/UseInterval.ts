import {useEffect, useRef} from "react";

export function useInterval(callback: any, delay: any) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            if (savedCallback !== undefined) {
                // @ts-ignore
                savedCallback.current();
            }
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}