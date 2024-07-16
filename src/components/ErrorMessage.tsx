export default function ErrorMessage({ title = 'Sorry, an error has occurred', message }: { title?: string, message: string }) {
    return (
        <div className='flex flex-col items-center h-screen'>
            <h1 className='mt-10 text-2xl md:text-4xl'>{title}</h1>
            <p className='text-sm md:text-lg my-3'>
                {message}
            </p>
        </div>
    )
}