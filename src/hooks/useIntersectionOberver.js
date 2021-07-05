import { useEffect, useState } from 'react'

export const useIntersectionObserver = ( element ) => {
    const [ show, setShow ] = useState(false)
    useEffect( () => {
        const observer = new window.IntersectionObserver( (entries) => {
            const { isIntersecting } = entries[0]
            if(isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        },{ rootMargin:'100px'} )
        observer.observe(element.current)
    }, [element])

    return { show }
} 
