import { Schema, model, models } from 'mongoose';

const JobSchema = new Schema({
  userId: {
    ref: 'User',
    type: String,
  },
  id: {
    type: String,
  },
  company_name: {
    type: String,
  },
  job_title: {
    type: String,
  },
  description: {
    type: String,
  },
 
  salary: {
    type: String,
  },
  createddate:
  {
    type: String,
  },
  job_type: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Job = models.Job || model('Job', JobSchema);

export default Job;