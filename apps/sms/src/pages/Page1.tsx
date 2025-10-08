import { Card } from 'antd'
import React, { Suspense } from 'react'

const UserCard = React.lazy(() => import('../../../parent/src/components/shared/UserCard'))

export default function Page1() {
  return (
    <div>
      <h1>SMS - Page 1</h1>
      <Card>
        <p>This is SMS Page 1 content. You can add your SMS functionality here.</p>
      </Card>
      <Suspense fallback={<div>Loading UserCard...</div>}>
        <UserCard />
      </Suspense>
    </div>
  )
}