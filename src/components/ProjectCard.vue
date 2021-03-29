<template>
	<li class="col-span-1 bg-background-secondary rounded-lg shadow">
		<div class="w-full flex items-center justify-between p-4 space-x-6">
			<div class="work-card flex-1">
				<div class="truncate">
					<div class="flex items-center space-x-3">
						<h2 class="text-2xl leading-10 font-semibold  truncate" :title="projectName">
							{{projectName}}
						</h2>
					</div>
					<g-image
						:src="imgUrl"
						alt="tech stack icon"
						class="flex-shrink-0 sm:mx-0 mb-3 float-right w-2/3"
					/>
				</div>
				<div v-on:click="navigateToUrl(codeLink)" class="work-card-details-container cursor-pointer">
					<div class="work-card-header">
						<g-image
							:src="imgCoverUrl"
							alt="tech stack icon"
							class="work-image flex-shrink-0 sm:mx-0 float-right"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center px-0.5">
			<h4>{{description}}</h4>
		</div>
		<div>
			<div class="p-3 flex flex-col space-y-4">
				<div class="flex-1  space-y-2">
					<div class="flex flex-wrap space-x-2">
						<div v-for="tool in tools" :key="tool" style="padding-top: 0.2em; padding-bottom: 0.2rem" class="flex flex-initial items-center space-x-1 text-sm px-2 my-0.5 ml-2 bg-gray-200 text-gray-800 rounded-full">
							<div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full"></div>
							<div>{{ tool }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="border-t border-gray-200">
			<div class="-mt-px flex">
				<div class="w-0 flex-1 flex border-r border-gray-200">
					<a
						:href="liveLink"
						class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-lg leading-5 font-medium border border-transparent rounded-bl-lg text-indigo-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
						<span class="ml-3">Visit live</span>
					</a>
				</div>
				<div class="-ml-px w-0 flex-1 flex">
					<a
						:href="codeLink"
						class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-lg leading-5 font-medium border border-transparent rounded-br-lg text-indigo-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							></path>
						</svg>
						<span class="ml-3">See code</span>
					</a>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		projectName: {
			type: String,
			required: true,
        },
        imgUrl: {
			type: String,
			required: true,
        },
        liveLink: {
			type: String,
			required: true,
        },
        codeLink: {
			type: String,
			required: true,
		},
		imgCoverUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		tools: {
			type: Array
		},
	},
	methods: {
        navigateToUrl: function(codelink) {
			window.open(codelink, '_blank');
    	}
	}
};
</script>

<style lang="scss">
.work-card {
  width: 270px;
  height: 250px;
  border-radius: 10px;
  background-color: var(--work-card-bg);
  overflow: hidden;
  margin: auto;
  &-details-container {
    padding: 1rem;
    height: 100%;
    transition: transform 0.3s;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
  &-title {
    margin-top: 0;
  }
  &:hover &-details-container {
    transform: scale(1.07);
    transition: transform 0.3s;
  }
}
.work-card-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  overflow: hidden;
}
.work-image {
  min-width: 100%;
}
@media screen and (max-width: 625px) {
  .work-card {
    width: 90%;
    height: 280px;
    margin-top: 30px;
}
  }
</style>