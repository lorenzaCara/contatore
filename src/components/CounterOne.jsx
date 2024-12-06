import { useState } from "react"
import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import BadgeSet from "./BadgeSet"

export default function CounterOne() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
    }

    return (
        <>
            <BadgeSet/>
            <div className="w-full max-w-md mx-auto p-6">
    
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Counters</h1>
                </div>
    
                <div className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-center items-center text-sm text-muted-foreground">
                    <span>#1 Counter</span>
                </div>
    
                <div className="flex justify-center items-center">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleDecrement}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                    <span className="text-xl font-extrabold w-8 text-center">{count}</span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleIncrement}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                    </div>
    
                </div>
                </div>
            </div>
            </div>
        </>
    )
}