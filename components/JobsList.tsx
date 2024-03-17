'use client';
import JobCard from './JobCard';
import { useSearchParams } from 'next/navigation';
import { getAllJobsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import {JobType} from "@/utils/types";
import ButtonContainer from "@/components/ComplexButtonContainer";

function JobsList() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';
    const jobStatus = searchParams.get('jobStatus') || 'all';
    const pageNumber = Number(searchParams.get('page')) || 1;

    const { data, isPending } = useQuery({
        queryKey: ['jobs', search ?? '', jobStatus, pageNumber],
        queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
    });
    const { count = 0, jobs = [], totalPages = 0, page = 0 } = data || {};

    if (isPending) return <h2 className='text-xl'>Please Wait...</h2>;

    if (jobs.length < 1) return <h2 className='text-xl'>No Jobs Found...</h2>;

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between m-5'>
                <h2 className='text-xl font-semibold capitalize'>{count} jobs found</h2>
                {
                    totalPages < 2 ? null : <ButtonContainer currentPage={page} totalPages={totalPages} />
                }
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                {jobs.map((job: JobType) => {
                    return <JobCard key={job.id} job={job} />;
                })}
            </div>
        </>
    );
}
export default JobsList;
