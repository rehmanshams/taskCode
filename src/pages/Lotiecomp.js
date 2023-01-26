import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
// import animation from '../../public/images/underConstruction.json'

const LottieAnimation=() => {

    // const container = useRef<HTMLDivElement>(null);
    const container = useRef(null);
    useEffect(() => {
        if (container.current) {
            lottie.loadAnimation({
                container: container?.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                // animationData: require(${animationData}),
                // animationData: ${animationData},
                animationData: require('../../public/lotie/fire loader.json')
            })
        }
    }, [container])

    return (
        <div className='flex justify-center'>
            <div className="w-[520px] h-[520px]" ref={container}></div>
        </div>
    )
}
export default LottieAnimation