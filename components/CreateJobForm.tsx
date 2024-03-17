'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    JobStatus,
    JobMode,
    JobType,
    CreateAndEditJobType,
    createAndEditJobSchema
} from "@/utils/types";
import { CustomFormSelect, CustomFormField } from "@/components/FormComponents";
import { Form } from "@/components/ui/form";

const CreateJobForm = () => {
    const form = useForm<CreateAndEditJobType>({
        resolver: zodResolver(createAndEditJobSchema),
        defaultValues: {
            position: '',
            company: '',
            location: '',
            status: JobStatus.Pending,
            mode: JobMode.FullTime
        },
    })

    function onSubmit(values: CreateAndEditJobType) {
        console.log(values)
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='bg-muted p-8 rounded'>
            <h2 className='capitalize font-semibold text-4xl mb-6'>Add job</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
                <CustomFormField name={'position'} control={form.control} />
                <CustomFormField name={'company'} control={form.control} />
                <CustomFormField name={'location'} control={form.control} />

                {/* job status */}
                <CustomFormSelect name={'status'} control={form.control} labelText='job status' items={Object.values(JobStatus)} />
                {/* job mode */}
                <CustomFormSelect name={'mode'} control={form.control} labelText='job mode' items={Object.values(JobMode)} />

                <Button type='submit' className={'self-end capitalize'}>Create Job</Button>
            </div>
        </form>
    </Form>
}

export default CreateJobForm;
