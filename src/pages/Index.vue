<template>
	<Layout>
		<div
			class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pb-16 lg:py-24"
		>
			<div
				class="text-5xl font-bold w-full sm:w-3/5 text-center mt-16 lg:mt-24 sm:text-left xs:mb-16"
			>
				<h5 class="text-2xl">
					Hello! <span class="wave">👋🏻</span>
				</h5>
				<div class="leading-tight">I’m Mohamed Abdelrahman</div>

				<div class="pt-2 text-2xl text-blue-400 leading-tight">
					<vue-typed-js :strings="['Full Stack web developer', 'Software Developer', 'Open Source Contributor', 'Back-End Developer']" :loop="true" :typeSpeed="30">
						<h1>I'm a <span class="typing"></span></h1>
					</vue-typed-js>
				</div>

				<a
					class="inline-block bg-background-secondary button py-2 mx-1 px-3 rounded-lg text-indigo-300 text-lg hover:text-gray-500"
					href="https://drive.google.com/file/d/1uxnweDRi0c_OcKkCtYc4gY-Q-Vnzthpv/view?usp=sharing"
					target="_blank"
					>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text inline"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
					View Resume</a
				>

				<a
					class="inline-block bg-background-secondary button py-2 px-3 mx-1 rounded-lg text-indigo-300 text-lg hover:text-gray-500"
					href="https://www.linkedin.com/in/aboelkassem"
					target="_blank"
					>
					<svg
						width="20"
						height="20"
						class="inline"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 128 128" >
						<path
							id="plain"
							d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"
						></path>
					</svg>
					Linkedin</a
				>

				<a
					class="inline-block bg-background-secondary button py-2 px-3 mx-1 rounded-lg text-indigo-300 text-lg hover:text-gray-500"
					href="https://github.com/aboelkassem/"
					target="_blank"
					>
					<svg
						width="20"
						height="19"
						class="inline"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z"
							fill-rule="nonzero"
						/>
					</svg>					
				Github</a
				>
				<a
					class="inline-block bg-background-secondary button py-2 px-3 mx-1 rounded-lg text-indigo-300 text-lg hover:text-gray-500"
					href="mailto:mohamedabdelrahman972@gmail.com"
					>
					<svg
						width="25"
						height="20"
						class="inline"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z"
							fill-rule="nonzero"
						/>
					</svg>				
					Email</a
				>
			</div>
			<g-image
				width="20px"
                height="20px"
				src="/developer.svg"
				alt="hero"
				class="mx-auto sm:mx-0 md:w-2/4 sm:w-2/5 md:pl-16 md:pb-16"
			/>
		</div>

		<g-image
			width="20px"
            height="20px"
			class="mx-auto"
			alt="arrow towards projects"
			src="/arrow1.svg"
		></g-image>

		<div class="border-gray-200">
			<div
				class="get-to-know-me container-inner mx-auto text-xl relative"
			>
				<g-image
					width="20px"
                    height="20px"
					class="my-16"
					id="about"
                    alt="Who Am I?"
					src="/whoami.svg"
				/>

				<div
					class="flex flex-col sm:flex-row justify-between items-center mb-16"
				>
					<div>
						<g-image
							width="20px"
                            height="20px"
							src="/avatar.png"
							alt="avatar"
							class="w-64 h-full mb-8 lg:mb-0"
						/>
					</div>
					<div class="flex-1 text-lg sm:text-xl ml-6">
						<p class="m-8">
							Hi, I'm Mohamed abdelrahman, a Junior at the Beni-Suef University studying Software Engineering, 
							and a passionate self-taught software developer from Egypt.
						</p>

						<p class="m-8">
							I spend a lot of my development time contributing to open-source projects.
							Most of it started by myself which can be found from my GitHub profile.
						</p>

						<p class="m-8">
							As a software engineer, I enjoy working on full-stack projects. 
							I specialize in C# and enjoy using Microsoft tecnhologies such as .NET Framework and .NET Core, ASP.NET, MVC,  Web API, Angular, JavaScript, Typescript, and SQL databases to create projects. I also have experience using Java, SignalR, and xUnit.
						</p>

						<p class="m-8">
							Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.
							<a href="https://drive.google.com/file/d/1uxnweDRi0c_OcKkCtYc4gY-Q-Vnzthpv/view?usp=sharing">View resume</a>
						</p>
					</div>
				</div>
			</div>
		</div>

		<g-image
			width="20px"
            height="20px"
			class="mx-auto"
			alt="arrow towards bio"
			src="/arrow2.svg"
		></g-image>

		<div class="border-gray-200">
			<div
				class="get-to-know-me container-inner mx-auto text-xl relative"
			>
				<g-image
					width="20px"
                    height="20px"
					class="my-6 xs:w-5/12 md:w-3/12"
					id="education"
                    alt="education"
					src="/education.svg"
				/>

				<div
					class="flex flex-col sm:flex-row justify-between items-center mb-16"
				>
					<div>
						<g-image
							width="20px"
                            height="20px"
							src="/Beni-Suef_University_logo.png"
							alt="Beni-Suef_University_logo"
							class="w-40 h-40 mb-8 lg:mb-0 shadow"
						/>
					</div>
					<div class="flex-1 text-lg sm:text-xl ml-6">
						<p class="ml-8 text-4xl font-semibold">
							<a href="https://www.bsu.edu.eg/home.aspx?lang=en" target="_blank"> Beni-Suef University </a>
						</p>

						<p class="ml-8 text-2xl">
							Bachelor of Science, <b>Major</b> Computer Science
						</p>

						<ul class="ml-8 text-base">
							<li class="text-center">Sept 2018- Present</li>
							<li class="text-gray-600">Beni Suef, Egypt</li>
							<li>Cumulative GPA: 3.3/4.0</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="border-gray-200">
			<div
				class="get-to-know-me container-inner mx-auto text-xl relative"
			>
				<g-image
					width="20px"
                    height="20px"
					class="xs:my-6 lg:my-0 xs:w-5/12 md:w-1/5"
					id="skills"
                    alt="skills"
					src="/skills.svg"
				/>

				<div
					class="flex flex-col sm:flex-row justify-between items-center mb-16"
				>
					<div class="xs:w-full sm:w-6/12">
						<h2 class="text-4xl">What I do?</h2>
						<p class="text-xl" style="text-indent: 10px;">Software Developer that is rapidly growing and expanding his knowledge.</p>
						<p>⚡ Developing highly Back End systems for web applications.</p>
						<p>⚡ Designing and implementing APIs for web and mobile applications.</p>
						<p>⚡ Coding Front End / User Interfaces using Angular and other integrating third party services.</p>
					</div>
					<div class="flex-1 text-lg sm:text-xl sm:ml-6 xs:mt-7">
						<ul class="flex flex-wrap ml-8 text-base ml-auto">
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/html.svg"
										id="html"
										alt="html icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">HTML</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/css.svg"
										id="css"
										alt="css icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">CSS</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/csharp.svg"
										id="csharp"
										alt="csharp icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">C#</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/java.svg"
										id="java"
										alt="java icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">Java</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/javascript.svg"
										id="javascript"
										alt="javascript icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">Javascript</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/typescript.svg"
										id="typescript"
										alt="typescript icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">Typescript</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/dot-NET_Core_Logo.png"
										id="dot-net-core"
										alt="dot-net-core icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">.NET Core</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/asp.svg"
										id="asp"
										alt="asp icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">ASP.NET</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/angular.svg"
										id="angular"
										alt="angular icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">Angular</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/jquery.svg"
										id="jquery"
										alt="jquery icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">jQuery</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/sql-server.svg"
										id="sql-server"
										alt="sql-server icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">SQL Server</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/mysql.svg"
										id="mysql"
										alt="mysql icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">MySQL</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/git.svg"
										id="git"
										alt="git icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">Git</p>
								</div>
							</li>
							<li class="flex-initial transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-600 hover:text-opacity-75 w-1/5">
								<div class="ml-8 mb-8">
									<g-image
										width="20px"
										height="20px"
										src="/docker.svg"
										id="docker"
										alt="docker icon"
										class="mx-auto mb-1 sm:mx-0 border-2 border-blue-400 rounded-full p-1 w-full"
									/>
									<p class="truncate font-semibold text-center">Docker</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<g-image
			width="20px"
            height="20px"
			class="mx-auto"
			alt="arrow towards bio"
			src="/arrow1.svg"
		></g-image>

		<div class="projects container-inner mx-auto text-xl py-24 relative">
			<g-image
				width="20px"
                height="20px"
				src="/projects.svg"
				id="projects"
				alt="projects header"
				class="mx-auto mb-12 sm:mx-0"
			/>

			<div
				class="absolute right-0"
				style="top: 50px; transform: translate(100%) rotate(180deg)"
			>
				<svg width="170px" height="170px">
					<use xlink:href="#dots-triangle" />
				</svg>
			</div>

			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<ProjectCard
					projectName="Listify"
					imgUrl="/aaise.svg"
					liveLink="https://youtu.be/NlUXDOMyAPM"
					codeLink="https://github.com/aboelkassem/Listify"
					imgCoverUrl="/listify.png"
					description="A video, music sharing and streaming experience platform based on ASP.NET Core and Angular."
					v-bind:tools="['ASP.NET Core','Angular','SignalR', 'IdentityServer4', 'Jira', 'Paypal', 'Youtube', 'Spotify']"
				/>
				<ProjectCard
					projectName="ChattingApp"
					imgUrl="/aaseh.svg"
					liveLink="https://chatting-apps.herokuapp.com"
					codeLink="https://github.com/aboelkassem/ChattingApp"
					imgCoverUrl="/chattingapp.png"
					description="A real-time messaging and dating application build with ASP.NET Core and Angular."
					v-bind:tools="['ASP.NET Core','Angular', 'SQllite', 'AutoMapper', 'JwtToken', 'alertifyjs', 'Cloudinary']"
				/>
				<ProjectCard
					projectName="Foods"
					imgUrl="/asejb.svg"
					liveLink="https://f00ds.herokuapp.com"
					codeLink="https://github.com/aboelkassem/Foods_Restaurant"
					imgCoverUrl="/foods.png"
					description="A restaurant management system that enable customers to order food online and get delivered."
					v-bind:tools="['ASP.NET Core','EntityFramework Core', 'MSSQL', 'jQuery', 'AJAX', 'toastr', 'Stripe', 'SendGrid']"
				/>
				<ProjectCard
					projectName="Library"
					imgUrl="/aes.svg"
					liveLink="http://library.somee.com"
					codeLink="https://github.com/aboelkassem/Library_WebApplication"
					imgCoverUrl="/library.png"
					description="A library managment system for uploading, downloading and browsing books based on ASP.NET MVC."
					v-bind:tools="['ASP.NET MVC','EntityFramework 6', 'MSSQL', 'AJAX']"
				/>
			</ul>
		</div>

		<div class="overflow-x-hidden">
			<div class="contact-me bg-background-secondary pt-16">
				<div class="container-inner mx-auto text-xl pb-4 relative">
					<h2 class="font-bold mb-6" id="contact">Get In Touch:</h2>

					<div
						class="absolute right-0 top-0"
						style="transform: translate(100%) rotate(180deg)"
					>
						<svg width="170px" height="170px">
							<use xlink:href="#dots-triangle" />
						</svg>
					</div>

					<p class="my-8">
						Feel free to reach out to discuss a project or job opportunity.
					</p>

					<p class="my-8">
						If you want to chat about anything? Ping me anytime on
						<a href="https://twitter.com/aboel_kassem">Twitter</a>. I’m also on <a href="https://github.com/aboelkassem">Github</a>, and <a href="https://www.linkedin.com/in/aboelkassem">Linkedin</a> if you’re into that sort of thing.
					</p>


					<p class="my-8">
						Or, you can
						easily fill up the form below and send me an email, to talk about a project collaboration, or just say hi, I'd love to hear from you.
					</p>

					<div class="text-lg sm:text-lg mb-16">
						<form
							action="https://formspree.io/f/mnqlawow"
							method="POST"
							class="mb-12"
						>
							<div class="flex flex-wrap mb-6 -mx-4">
								<div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
									<label
										class="block mb-2 text-copy-primary"
										for="name"
									>
										Name
									</label>

									<input
										type="text"
										name="name"
										id="name"
										placeholder="Full Name"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
										required
									/>
								</div>

								<div class="w-full px-4 md:w-1/2">
									<label
										class="block text-copy-primary mb-2"
										for="email"
									>
										Email Address
									</label>

									<input
										type="email"
										name="email"
										id="email"
										placeholder="email@example.com"
										class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
										required
									/>
								</div>
							</div>

							<div class="w-full mb-12">
								<label
									class="block text-copy-primary mb-2"
									for="message"
								>
									Message
								</label>

								<textarea
									id="message"
									rows="5"
									name="message"
									class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
									placeholder="Enter your message here."
									required
								></textarea>
							</div>

							<div class="flex justify-end w-full">
								<input
									type="submit"
									value="Submit"
									class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import ProjectCard from '../components/ProjectCard';

export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		ProjectCard,
	},
	mounted() {
		
	},
};
</script>