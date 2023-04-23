import { UserContext } from "./userContext"
import { useContext } from "react"

export const useUserContext = () => {
  const context = useContext(UserContext)

  if(!context) {
    throw Error('usercontext must be used inside a userContextProvider')
  }

  return context
}