import { createContext, useState, ReactNode, useContext } from 'react'

type AccordionContext = {
  open: number | undefined
  setOpen: (i: number | undefined) => void
}

const AccordionCtx = createContext<AccordionContext>({
  open: undefined,
  setOpen: function (i: number | undefined) {},
})

export function AccordionCtxProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<number | undefined>(undefined)

  const handleOpen = (i: number | undefined) => {
    setOpen((currentIndex) => (i === currentIndex ? undefined : i))
  }

  const context = {
    open,
    setOpen: handleOpen,
  }

  return (
    <AccordionCtx.Provider value={context}>{children}</AccordionCtx.Provider>
  )
}

export const useAccordion = () => {
  const { open, setOpen } = useContext(AccordionCtx)

  return { open, setOpen }
}

export default AccordionCtx
