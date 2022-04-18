import { v4 } from "uid";

export default function generateId(): string {
    return v4();
}