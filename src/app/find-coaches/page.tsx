import Navbar from "~/components/Navbar/Navbar";
import type {Viewport} from 'next';
import FilterForm from "~/components/Form/FilterForm";

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default function FindCoaches() {

    return (
        <>
            <Navbar/>
            <div>
                <h1>Find Coaches</h1>
                <p>
                    Found {1} coaches that match your search
                </p>
                <FilterForm />

            </div>
        </>
    );
}
