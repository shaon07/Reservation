import Card from '@/components/Views/Card'
import CardTitle from '@/components/common/CardTitle'
import InputBox from '@/components/common/InputBox'
import React from 'react'

export default function CustomerInformation() {
  return (
    <div className="flex flex-col gap-4">
      <CardTitle text={"Customer Information"} />
      <Card>
        <form className="flex flex-col gap-2">
          <InputBox label={"First Name"} type="text" required />
          <InputBox label={"Last Name"} type="text" required />
          <InputBox label={"Email"} type="text" required/>
          <InputBox label={"Phone"} type="number" required/>
        </form>
      </Card>
    </div>
  )
}
