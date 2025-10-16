import React from 'react'
import { cn } from '../../../../helpers/general.helpers'

export default function FloatingLabel({ label, children, className }: { label: string, children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("floating-label", className)} data-label={label}>
            {children}
        </div>
    )
}
