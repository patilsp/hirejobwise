import { Schema, model, models } from 'mongoose';

const JobSchema = new Schema({
  
  id: {
    type: String,
  },
  company: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  salary: {
    type: String,
  },
  createddate:
  {
    type: String,
  },
  status: {
    type: String,
  },
});

const Job = models.Job || model('Job', JobSchema);

export default Job;