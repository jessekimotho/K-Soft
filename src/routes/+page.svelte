<script>
	import { db } from '$lib/js/db.js';

	const demoPatients = [
		{ name: 'John Doe', age: 30, gender: 'Male' },
		{ name: 'Jane Smith', age: 25, gender: 'Female' },
		{ name: 'Alice Johnson', age: 40, gender: 'Female' },
		{ name: 'Bob Brown', age: 35, gender: 'Male' }
	];

	// Function to add demo data to the patients table
	async function addDemoData() {
		try {
			await db.patients.bulkAdd(demoPatients);
			console.log('Demo data added successfully!');
		} catch (error) {
			console.error('Failed to add demo data:', error);
		}
	}

	addDemoData();  
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
