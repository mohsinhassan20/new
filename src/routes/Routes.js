import React from 'react'
import { Route, Routes } from "react-router-dom"
import Dashboard from '../Components/dashboard/Dashboard'
import Tasks from '../Components/tasks/Tasks'
import NotFound from '../Components/notFound/NotFound'
import Deals from '../Components/deals/Deals'
import Chats from '../Components/chats/Chats'
import Members from "../Components/members/Members"
import Settings from '../Components/settings/Settings'
import Emails from '../Components/emails/Emails'


export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/emails" element={<Emails />} />
            <Route path="/members" element={<Members />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
//i guess i need to change them.