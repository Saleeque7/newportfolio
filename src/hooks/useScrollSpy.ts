'use client'

import { useEffect, useState } from 'react'

export const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let currentId = ''
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= offset && rect.bottom >= offset) {
            currentId = id
            break
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}
