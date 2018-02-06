"# codeTest" 

Prompt:

•           Design and build a Node.js-based microservice (no need for UI or DB storage) that contains one REST API endpoint. This endpoint should:

Receive requests containing the following inputs: startDate and numberOfDays.
Respond with the following outputs: totalSaved.


•           The endpoint will determine the output by solving this “Milo's Money” problem:

Every day, Milo drops some coins in his piggy bank. But, the amount he puts in varies by day: the first 7 days of the month -  he saves $0.05 per day; the second 7 days of the month - he saves $0.10 per day; the third 7 days of the month - he saves $0.15 per day; the fourth 7 days of the month - he saves $0.20 per day; and any remaining days of the month after that - he saves $0.25 per day.

Milo wants a tool built that will allow him to track his savings for any span of time. All he should need to do is provide the date for the calculation to begin and how many days to calculate (including the beginning date), and the tool should tell him how much he’ll save during that time.

NOTE: Milo only saves money on his work days. You can assume he works a typical Monday-Friday work week.