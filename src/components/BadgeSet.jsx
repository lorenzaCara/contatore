import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function BadgeSet() {
    const levels = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex justify-center gap-2 mb-8">
            {levels.map((lvl) => (
                <Link
                    key={lvl}
                    to={`/${lvl}`}
                    className="no-underline text-inherit"
                >
                    <Badge className="cursor-pointer">
                        Counter {lvl}
                    </Badge>
                </Link>
            ))}
        </div>
    );
}




