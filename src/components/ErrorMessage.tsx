export default function ErrorMessage({ message }: { message: string }) {
    return (
        <div className='flex flex-col items-center h-screen'>
            <h1 className='mt-10 text-2xl md:text-4xl'>Sorry, an error has occurred</h1>
            <p className='text-sm md:text-lg my-3'>
                {message}
            </p>
        </div>
    )
}