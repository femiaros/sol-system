import { useState,useMemo,useEffect } from "react"


const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState(false)

    const callBackFunction = entries =>{
        const [entry] = entries
        // set visibility to true if element on screen
        setIsVisible(entry.isIntersecting) 
    }

    const optionsMemo = useMemo(()=>{
        return options
    },[options])

    useEffect(()=>{
        const observer = new IntersectionObserver(callBackFunction,optionsMemo)
        const currentTarget = targetRef.current
        if(currentTarget) observer.observe(currentTarget) // trigger callback func

        return ()=>{
            if(currentTarget) observer.unobserve(currentTarget)
        }
    },[targetRef, optionsMemo])

  return isVisible // return boolean
}

export default useElementOnScreen