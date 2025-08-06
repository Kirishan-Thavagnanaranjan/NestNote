import NoteForm from '@/components/NoteForm'
import NoteList from '@/components/NoteList'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-50 px-4 py-8 min-h-screen
         w-full '>
            <main className=' transition-all duration-300 shadow-md rounded-lg p-6  w-full sm:max-w-lg mx-auto bg-sky-50'>
                <h1 className='text-3xl text-sky-900 font-bold mb-6 text-center'>NoteNest</h1>

                <div className="mb-4">
                    <NoteForm />
                </div>
                <hr className="my-4 border-sky-200" />
                <div>
                    <NoteList />
                </div>
            </main>
        </div>
    )
}

export default Home