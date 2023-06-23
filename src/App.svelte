<script lang="ts">
	import { onMount } from "svelte";
	let jobs: [];

	let selected: string[] = [];

	function selecttag(tag: string) {
		if (!selected.includes(tag)) {
			selected = [tag, ...selected];
		}
	}
	function checkCommon(tags) {
		let count = 0;
		for (let s of selected) {
			if (tags.includes(s)) {
				count++;
			}
		}
		if (selected.length == count) {
			return true;
		} else {
			return false;
		}
	}
	function clearSpecific(sel){
		selected.splice(selected.indexOf(sel), 1)
		selected = selected
	}
	function clearSelected() {
		selected = [];
	}
	onMount(async () => {
		const response = await fetch(
			"https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json"
		);
		jobs = await response.json();
	});
</script>

<div class="page p-10">
	<div class="ctr">
		{#if jobs}
			{#if selected.length > 0}
				<div
					class="tag-info flex justify-between items-center bg-white my-10 px-10 py-2"
				>
					<div class="tag-list flex">
						{#each selected as sel}
							<div class=" mx-2 p-2">
								<span class="inline-block tl-text">{sel}</span>
								<button class="tl-button" on:click={()=>clearSpecific(sel)}>&nbspX&nbsp</button>
							</div>
						{/each}
					</div>
					<div class="clear">
						<button on:click={clearSelected}>Clear</button>
					</div>
				</div>
			{/if}
			{#each jobs as job}
				{#if selected.length == 0 || checkCommon(job.keywords)}
					<div
						class="job my-10 px-10 py-2 flex flex-row justify-between bg-white items-center"
					>
						<div
							class="company flex flex-row justify-around items-center w-auto"
						>
							<div class="logo rounded celements">
								<img
									class="image object-cover h-12 w-12 rounded-xl"
									src={job.company_logo}
									alt=""
								/>
							</div>
							<div class="description celements">
								<div class="company-name">{job.company}</div>
								<div class="job-name text-xl font-bold">
									{job.position}
								</div>
								<div class="job-details">
									<span class="detail"
										>{Math.round(
											(Date.now() - job.posted_on) /
												86400000
										)}d ago</span
									>
									<span class="detail">{job.timing}</span>
								</div>
							</div>
						</div>
						<div class="tags">
							{#each job.keywords as tag}
								<button on:click={() => selecttag(tag)}
									><span
										class={selected.includes(tag)
											? "tag selected"
											: "tag "}>{tag}</span
									></button
								>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		{:else}
			<div>Loading...</div>
		{/if}
	</div>
</div>

<style>
	.page {
		height: 100vh;
		background: rgb(238, 251, 251);
	}
	.tags .tag {
		padding: 4px;
		margin: 0px 10px;
		color: rgb(100, 187, 186);
		background: rgb(238, 251, 251);
		border-radius: 15%;
	}
	.tags .selected {
		background: rgb(95, 164, 162);
		color: white;
	}
	.tags .tag :hover {
		background: rgb(95, 164, 162);
		color: white;
	}
	.company .description .company-name {
		color: rgb(100, 187, 186);
		font-weight: bold;
	}
	.company .description .job-details .detail {
		margin: 0px 5px;
		color: rgb(100, 100, 100);
	}
	.company .celements {
		margin: 0px 15px;
	}
	.tag-info .clear {
		color: rgb(100, 187, 186);
	}
	.tag-info .tl-text {
		color: rgb(100, 187, 186);
		background: rgb(238, 251, 251);
		font-weight: bold;
		font-size: 1.2rem;
	}
	.tag-info .tl-button {
		background: rgb(95, 164, 162);
		color: white;
		font-size: 1.2rem;
	}
</style>
