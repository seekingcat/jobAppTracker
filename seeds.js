require('dotenv').config();
let dbConnectionString = process.env.DB_STRING
const mongoose = require('mongoose');
const Meet = require('./models/model')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbConnectionString);
  console.log('CONNECTED TO DATABASE')

  const meets = [
    {
        jobtitle: 'Fullstack Engineer - ReactJS/.NET',
        salary: 67000,
        joblisting: 'https://sainsburys.jobs/jobs/description/268773?utm_campaign=4dayweek.io&ref=4dayweek.io&source=4dayweek.io&utm_source=4dayweek.io&utm_medium=4dayweek.io',
        status: 'Applied',
        notes: 'React JS, SQL, MongDB, Kubernetes and Docker. It will include server less functions and event-driven architecture too. Implement cloud technologies such as AWS and Google Cloud Platform. Looks promising. Following up next week'
    },
    {
        jobtitle: 'Principal Software Engineer',
        salary: 91800,
        joblisting: 'https://careers.bbc.co.uk/job/Principal-Software-Engineer-Mobile-Cloud/805744202/?utm_source=4dayweek.io&utm_medium=4dayweek.io&utm_campaign=4dayweek.io&ref=4dayweek.io&source=4dayweek.io',
        status: 'Rejected',
        notes: 'Could not work with cloud technologies'
    },
    {
        jobtitle: 'R&D Technical Consultant',
        salary: 65000,
        joblisting: 'https://careers.granttree.co.uk/jobs/3531494-senior-r-d-technical-consultant-software-focused?utm_source=4dayweek.io&utm_medium=4dayweek.io&utm_campaign=4dayweek.io&ref=4dayweek.io&source=4dayweek.io',
        status: 'Applied',
        notes: 'Low salary'
    },
    {
        jobtitle: 'TypeScript Engineer - React/Node/Lambda',
        salary: 0,
        joblisting: 'https://sainsburys.jobs/jobs/description/266732?ref=4dayweek.io&source=4dayweek.io&utm_source=4dayweek.io&utm_medium=4dayweek.io&utm_campaign=4dayweek.io',
        status: 'Applied',
        notes: 'Salary not listed, listed as competitive with benefits. Unsure'
    }
  ]

  await Meet.insertMany(meets)
}