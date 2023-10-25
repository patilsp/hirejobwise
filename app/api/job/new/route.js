import Job from "@/models/job";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { company, title, description, salary, createddate, status } = await request.json();

    try {
        await connectToDB();
        const newJob = new Job({ company, title, description, salary, createddate, status });

        await newJob.save();
        return new Response(JSON.stringify(newJob), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new job", { status: 500 });
    }
}
