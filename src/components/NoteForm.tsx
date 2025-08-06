import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import toast from "react-hot-toast";

const NoteForm = () => {

    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        if (!note.trim()) {
            toast.error("Please enter a note.");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, "notes"), {
                text: note,
                createdAt: Timestamp.now()
            });
            setNote("");
            toast.success("Note added successfully!");
        } catch (error) {
            console.error("Error adding note:", error);
            toast.error("Failed to add note.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='space-y-4 w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md '>
            <Input
                type="text"
                aria-label="Note input"
                placeholder="Enter your note here..."
                value={note}
                maxLength={50}
                className="border p-2 rounded w-full mb-4"
                onChange={(e) => setNote(e.target.value)} />

            <div className="flex justify-between text-gray-500 text-sm">
                <span>{note.length}/50</span>
            </div>
            <Button className="w-full mt-3"
                onClick={handleClick}
                disabled={loading}>
                {loading ? "Saving..." : "Add Note"}
            </Button>
        </div>
    )
}

export default NoteForm