import React from 'react'
import debounce from 'lodash.debounce'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type ScrollState = {
  scrollY: number
}

const context = createContext<ScrollState>(null!)

type Props = {
  children?: ReactNode
}

export function ScrollProvider({ children }: Props) {
  const [state, setState] = useState<ScrollState>({
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
  })
  useEffect(() => {
    const handleScroll = debounce(
      () => {
        setState({ scrollY: window.scrollY })
      },
      150,
      {
        leading: true,
        trailing: true,
      }
    )

    window.addEventListener('scroll', handleScroll)

    if (window.scrollY) {
      setState({ scrollY: window.scrollY })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <context.Provider value={state}>{children}</context.Provider>
}

export function useScroll() {
  return useContext(context)
}
