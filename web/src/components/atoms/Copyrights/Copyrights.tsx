'use client'

import { DynamicLink } from "../DynamicLink/DynamicLink"

const Copyrights = () => {
  return (
    <div className="mb-4 md:mb-0 copyright md:-order-1">
        <p className="text-sm text-custom-foreground mt-2">©{new Date().getFullYear()} <DynamicLink className="text-primary hover:border-b" href="/">NStrofyllas</DynamicLink></p>
    </div>
  )
}
export default Copyrights