import React, { ReactNode } from 'react'
import { IncomingCallIcon, LocalCallcon, OutgoingCallIcon } from '../../../../assets/icons'
import { CallDirection } from '../../../../components/Layout'

const directionInfo: Record<CallDirection, [string, ReactNode]> = {
    'inbound': ["Incoming", <IncomingCallIcon className='text-dp-dark-green' />],
    'local': ['Internal', <LocalCallcon className='text-dp-orange' />],
    "outbound": ["Outgoing", <OutgoingCallIcon className='text-dp-red' />]
}

export default function CallDirectionWithIcon({ direction }: { direction: CallDirection }) {
    const [directionText, directionIcon] = directionInfo?.[direction] || []

    return (
        <div className='flex items-center gap-2'>
            {directionIcon}
            {directionText}
        </div>
    )
}
