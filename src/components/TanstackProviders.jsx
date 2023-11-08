'use client'

import { QueryClientProvider, QueryClient } from "react-query"
import React, { useState } from "react"

const TanstackProvider = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default TanstackProvider