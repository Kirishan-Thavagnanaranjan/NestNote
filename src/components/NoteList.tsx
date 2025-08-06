import { db } from "@/lib/firebase"
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";


interface Note {
    id: string;
    text: string;
}

const NoteList = () => {

    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
            const notesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Note[];

            setNotes(notesData);
        })

        return () => unsubscribe();
    }, []);

    const deleteNote = async (id: string) => {
        try {
            await deleteDoc(doc(db, "notes", id));
            toast.success("Note deleted successfully!");
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete note.");
        }
    };



    if (notes.length === 0) {
        return <div className="text-center text-gray-500 mt-4">No notes available.</div>;
    }

    return (
        <div className={`grid gap-4 mt-4 ${notes.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 "}`}>
            {notes.map((note) => (
                <div key={note.id} className="border p-4 rounded-xl shadow-md bg-white hover:shadow-lg 
                transition-shadow duration-200 border-gray-200 hover:border-gray-300 
                flex items-center justify-between">
                    <p className="text-base text-gray-800">{note.text}</p>
                    <Button
                        className="ml-4 bg-red-500 text-white hover:bg-red-600 px-3 py-1 text-sm rounded-lg"
                        onClick={() => deleteNote(note.id)}>
                        Delete
                    </Button>
                    
                </div>

            ))}
        </div>
    )

}



export default NoteList