import { StatsLoadingCard } from '@/components/StatsCard';
function loading() {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
                <StatsLoadingCard/>
                <StatsLoadingCard/>
                <StatsLoadingCard/>
            </div>
        </div>
    );
}

export default loading;