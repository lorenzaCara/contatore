import { useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus, RotateCcw, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BadgeSet from "./BadgeSet";

export default function CounterFour() {
    const [counters, setCounters] = useState([
        { count: 0, hasLimits: true, isDisabled: false }
    ]);

    const handleIncrement = (index) => {
        setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            const counter = newCounters[index];

            if (!counter.isDisabled) {
                if (counter.hasLimits && counter.count < 10) {
                    counter.count++;
                } else if (!counter.hasLimits) {
                    counter.count++;
                }
            }

            return newCounters;
        });
    };

    const handleDecrement = (index) => {
        setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            const counter = newCounters[index];

            if (!counter.isDisabled) {
                if (counter.hasLimits && counter.count > -10) {
                    counter.count--;
                } else if (!counter.hasLimits) {
                    counter.count--;
                }
            }

            return newCounters;
        });
    };

    const handleReset = (index) => {
        setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index].count = 0;
            return newCounters;
        });
    };

    const counterColor = (count) => {
        if (count > 0) return 'text-green-500'; 
        if (count < 0) return 'text-red-500'; 
        return 'text-black'; 
    };

    const addNewCounter = () => {
        setCounters(prevCounters => 
            [...prevCounters, { count: 0, hasLimits: true, isDisabled: false }]
        );
    };

    const handleSwitch = (index, checked) => {
        setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            const counter = newCounters[index];

            if (checked && (counter.count > 10 || counter.count < -10)) {
                counter.count = 0;
            }

            counter.hasLimits = checked;
            return newCounters;
        });
    };

    const handleDelete = (index) => {
        if (counters.length > 1) {
            setCounters(prevCounters => prevCounters.filter((counter, i) => i !== index));
        }
    };

    const handleDeleteAllEO = () => {
        if (counters.length > 1) {
            setCounters([counters[0]]);
        }
    };

    const handleResetAll = () => {
        setCounters(counters.map(counter => ({
            ...counter,
            count: 0
        })));
    };

    const handleChevronUp = () => {
        setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters.push(newCounters.shift());
            return newCounters;
        });
    };

    const handleChevronDown = () => {
        setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters.unshift(newCounters.pop());
            return newCounters;
        });
    };

    return (
        <>
            <BadgeSet />
            <div className="w-full max-w-md mx-auto p-6">
    
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Counters</h1>
                        <Button variant="outline" size="sm" onClick={handleChevronUp}>
                            <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleChevronDown}>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleResetAll}>
                            <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={handleDeleteAllEO}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
    
                    {counters.map((counter, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-4 mb-4">
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span># {index + 1} Counter</span>
                                <span>Range -10/+10</span>
                                <span>Actions</span>
                            </div>
    
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleDecrement(index)}
                                        disabled={counter.isDisabled || (counter.hasLimits && counter.count <= -10)}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className={`text-xl font-extrabold w-8 text-center ${counterColor(counter.count)}`}>
                                        {counter.count}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleIncrement(index)}
                                        disabled={counter.isDisabled || (counter.hasLimits && counter.count >= 10)}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
    
                                <div className="flex items-center gap-2">
                                    <Switch
                                        checked={counter.hasLimits}
                                        onCheckedChange={(checked) => handleSwitch(index, checked)}
                                    />
                                </div>
    
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleReset(index)}
                                        disabled={counter.isDisabled}
                                    >
                                        <RotateCcw className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-red-500"
                                        onClick={() => handleDelete(index)}
                                        disabled={counter.isDisabled}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
    
                    <Button variant="outline" className="w-full" onClick={addNewCounter}>
                        New Counter
                    </Button>
                </div>
            </div>
        </>
    );
}
