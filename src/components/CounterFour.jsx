import { useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BadgeSet from "./BadgeSet";

export default function CounterFour() {
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [hasLimits, setHasLimits] = useState(true); //controlla se il contatore deve rispettare i limiti 10 e -10

    const handleIncrement = () => {
        if (!isDisabled) {
            if (hasLimits && count < 10) {
                setCount((prev) => prev + 1);
            } else if (!hasLimits) {
                setCount((prev) => prev + 1);
            }
        }
    };

    const handleDecrement = () => {
        if (!isDisabled) {
            if (hasLimits && count > -10) {
                setCount((prev) => prev - 1);
            } else if (!hasLimits) {
                setCount((prev) => prev - 1);
            }
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    const counterColor = () => {
        if (count > 0) return "text-green-500";
        if (count < 0) return "text-red-500";
        return "text-black";
    };

    const handleSwitch = (checked) => {
        setHasLimits(checked);

        
        if (checked && (count > 10 || count < -10)) {
            setCount(0);
        }
    };

    return (
        <>
        <BadgeSet />
            <div className="w-full max-w-md mx-auto p-6">
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Counters</h1>
                    </div>
    
                    <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>#1 Counter</span>
                            <span>Range -10/+10</span>
                            <span>Actions</span>
                        </div>
    
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleDecrement}
                                    disabled={isDisabled || (hasLimits && count <= -10)}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className={`text-xl font-extrabold w-8 text-center ${counterColor()}`}>
                                    {count}
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleIncrement}
                                    disabled={isDisabled || (hasLimits && count >= 10)} //non devo usare !isDisabled per abilitare il pulsante, perché la proprietà disabled funziona già con una logica inversa.
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
    
                            <div className="flex items-center gap-2">
                                <Switch
                                    checked={hasLimits}
                                    onCheckedChange={handleSwitch}
                                />
                            </div>
    
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleReset}
                                    disabled={isDisabled}
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
