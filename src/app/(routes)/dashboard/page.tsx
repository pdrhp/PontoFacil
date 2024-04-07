'use client'

import DataCard from "@/components/DataCard/DataCard"
import TitleCard from "@/components/TitleCard/TitleCard"
import { Clipboard } from 'lucide-react'

const DashboardPage = () => {






  return (
    <div className="h-full w-full flex flex-col gap-7">
      <div className="h-[6%] flex gap-3 border border-red-500">
        <TitleCard icon={Clipboard}>Dashboard</TitleCard>
        <TitleCard>Resumo Diário</TitleCard>

      </div>
      <div className="border border-green-500 h-[27.7%] flex gap-3">
        <DataCard></DataCard>
        <DataCard></DataCard>
        <DataCard></DataCard>
        <DataCard></DataCard>
      </div>
      <div className="border border-red-500 flex-1">

      </div>
    </div>
  )
}

export default DashboardPage
