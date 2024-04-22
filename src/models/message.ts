import { User } from "./user";

interface Message {
    id: number;
    sender: User;
    content: string;
    timestamp: number;
    status: {
        isReaded: boolean;
    };
}

export type { Message };