/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: "Syracuse University, EECS department, SYNE lab and Jones Lab",
    position: "Research Assistant",
    startDate: "2025-05",
    summary: `
      software hardware co-design for AI/ML applications on FPGAs.
      security and privacy research on software and hardware systems.
    `
  },
  {
    name: "Syracuse University, EECS department, FSSL(Full Stack Security Lab)",
    position: "Research Assistant",
    startDate: "2024-08",
    endDate: "2025-04",
    summary: `
      Blockchain(Inscription) security research and LLM security research.
    `
  },
  {
    name: 'Black Cow Tech',
    position: 'Software Engineer',
    url: 'https://smileidentity.com',
    startDate: '2023-08-10',
    endDate: '2024-03',
    summary: `
    Black Cow Tech is a groundbreaking company dedicated to democratizing cloud computing for everyone.
    With an intuitive user interface, streamlined deployment, scalability, cost optimization features,
     and extensive integration with popular cloud service providers, CloudEase makes accessing and leveraging
    the power of the cloud effortless. Our mission is to remove the complexity and cost barriers, empowering
    individuals, businesses, and organizations of all levels of technical expertise to harness the potential
    of cloud computing. Experience the freedom, flexibility, and innovation that CloudEase brings to the world
    of cloud computing and join us in embracing the future with ease.`,
    highlights: [
      'Designed engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Implemented an end-to-end CI/CD pipeline for Audio Transcribe Service with mulitple stages(IAM role, S3 Bucket, Bucket trigger event, Lambda function), encompassing automated code quality checks, unit testing, and deployment',
      'Utilized GitHub Actions to automate the entire CI/CD process, including code builds, testing, and deployment, ensuring consistent and reliable releases. Established a robust rollback mechanism to swiftly address any post-deployment issues, minimizing downtime and user impact, while managing infrastructure changes through AWS CloudFormation stack updates.',
    ],
  },
  {
    name: 'Business-intelligence of Oriental Nations Corporation',
    position: 'Software Engineer',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2020-08-30',
    endDate: '2021-05-31',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'Utilized EAST (Python, Pytorch) algorithm to detect stuff in an image. Built a pipeline for Resume Content Extraction and used Nginx for load balancing, processing a large number of requests up to 30,000 simultaneously',
      'Developed a Sentimental Analysis System based on Hadoop(Java, HDFS) and Spark(PySpark) platform that enables real-time big data processing that is highly available, scalable and extensible.',
    ],
  },
  {
    name: 'Jiangsu Phoenix Union Education Technology Co. LTD',
    position: 'Software Engineer Internship',
    // url: 'https://arthena.com',
    startDate: '2020-04-10',
    endDate: '2020-08-15',
    summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    We develop quantitative strategies to predict the value of fine art and build investment products.
    I ran a 20-person product and engineering org for 8 years. We were acquired by
    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    highlights: [
      'Utilized Redis for caching frequently accessed data to enhance the performance(QPS) of the system and RabbitMQ as the message broker to ensure reliable delivery. Worked on both backend and frontend development, including database design, RESTful API development, and UI design using Vue.js.',
      'Developed and maintained web applications using SpringBoot and MyBatis frameworks. Integrated Redis into the Second Kill Module for caching large volume order requests to prevent overselling and maintain consistency',  
    ],
  },
  {
    name: 'X-DATA Lab in CQUPT',
    position: 'Big Data trainee',
    // url: 'http://enveritas.org',
    startDate: '2017-07-01',
    endDate: '2019-06-30',
    summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    on technical strategy, helped hire engineers, and advised on their YC application.`,
    highlights: [
      'Implemented ensemble method – Stacking and Blending, improved stability of the final model, ranked 8th out of 10000 teams in the "Default User Risk Predictio" competition',
      'Trained a model for the O2O Coupon Forecasting Dataset ranked Top 10 in 15809 teams.',
      'Participate “Huawei Cup” National College Students Intelligent Design Competition and Earned 2nd Place Award',
    ],
  },

];

export default work;
