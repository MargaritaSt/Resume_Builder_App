INSERT INTO users (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');
INSERT INTO users (username, email, password) VALUES ('user2', 'user2@example.com', 'password2');
INSERT INTO users (username, email, password) VALUES ('user3', 'user3@example.com', 'password3');

INSERT INTO
  resume(user_id, resume_data)
VALUES
  (
    1,
    '{
    "profile": {
    "prof_title": "Full Stack Developer",
    "first_name": "Helen",
		"last_name": "Borten",
		"email": "helen@gme.com",
		"phone_number": "4163030300",
		"address": "130 Main St",
		"city": "Toronto",
		"province": "ON",
		"postal_code": "K0J7C1"
	},
	"summary": {
		"body": "Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full stack developer at Atmospheric Solutions."
	},
  "core_competencies": {
		"body": "Google Compute Engine Android and iOS App Development HTML, CSS, JavaScript, PHP Bootstrap & Angular JS jQuery SQL"
	},
  "achievements": {
	  "body": "Full-Stack Web Development with React Certification Front End Web Development Certificate"
	},
		"educations": [
			{
				"id":"1",
				"institution": "GOETHE-INSTITUT",
				"type_degree": "Bachelor of Science in Software Development",
				"graduat_date": "2006",
				"country": "Canada"
			}
		],
		"experiences": [
			{
				"id":"1",
        "job_title": "Junior Full Stack Developer",
				"employer_name": "Amazon",
        "employer_description": "Multinational technology company",
        "city": "Ottawa",
				"country": "Canada",
				"start_date": ["2018", "02"],
				"end_date": ["2019", "07"],
				"responsibilities": [
					"Developed full-stack web applications which processed, analyzed, and rendered data visually.",
					"Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.",
          "Planned, wrote, and debugged web applications and software with complete accuracy.",
          "Managed time-sensitive updates, including content changes and database upgrades."
				]
			}
		]
  
  }'
  );

  INSERT INTO
  resume(user_id, resume_data)
VALUES
  (
    2,
    '{
    "profile": {
    "prof_title": "Accounting Clerk Resume",
    "first_name": "Roman",
		"last_name": "Arkell",
		"email": "arkell@gme.com",
		"phone_number": "4168030300",
		"address": "138 Logan Avn",
		"city": "Ottowa",
		"province": "ON",
		"postal_code": "K0J7C8"
	},
	"summary": {
		"body": "Professional accounting clerk with 3+ years of experience providing accounting support. Seeking to provide my accounting skills at scanx incorporation. At Spire Impulse, streamlined the AP process to reduce un-invoiced total from over 50% to 12%."
	},
  "core_competencies": {
		"body": "Processed accounts payable and receivable, prepared accounting reports"
	},
  "achievements": {
	  "body": "Reduced un-invoiced total from over 50% to below 12% average during the first 90 days."
	},
 
		"educations": [
			{
				"id": "1",
				"institution": "Boston University ",
				"type_degree": "BS in Financial Accounting",
				"graduat_date": "2015",
				"country": "Canada"
			}
		],

		"experiences": [
			{
				"id":"2",
        "job_title": "Accounting Clerk",
				"employer_name": "Virtuoso College",
        "employer_description": "Accounting company",
        "city": "Vancouver",
				"country": "Canada",
				"start_date": ["2015", "01"],
				"end_date": ["2020", "01"],
				"responsibilities": [
					"Maintained records for 70+ clients, including ledger accounts.",
					"Assisted with year-end 1099 reporting and maintained W-9 files.",
          "Post billing statements to over 100 accounts."
				]
			}
		]
  
  }'
  );