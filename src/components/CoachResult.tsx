import Image from "next/image";

interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
}

interface Coach {
    user: User;
    id: string;
    userId: string;
    isCoach: boolean;
    role: string;
    level: string;
}

interface CoachResultProps {
    coach: Coach;
    key: number;
}

export default function CoachResult({ coach, key }: CoachResultProps) {
    return (
        <div key={key} className="flex items-center mx-3 my-2 px-4 py-3 rounded-lg bg-zinc-200">
            <Image src={`${coach.user.image}`} alt={`${coach.user.name}`} width='0' height='0' sizes='100vw'
                   className='w-32 h-32 flex-shrink-0 rounded-md'/>
            <div className='mx-4 ms-5'>
                <div className='mb-2'>
                    <h2 className='font-medium text-2xl'>{coach.user.name}</h2>
                    <p className='text-stone-500'>{coach.user.email}</p>
                </div>
                <div>
                    <p>{`${coach.role} - Level ${coach.level}`}</p>
                </div>
            </div>
        </div>
    );
}