import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div>
				<div className="min-h-screen h-screen bg-[#BCA37F] flex justify-center items-center">
					<div className="flex-col">
						<div className="leading-20 py-24 px-12 max-w-4xl border-2 border-white border-solid flex-col text-center mb-8">
							<h1 className="text-white text-[100px] font-bold font-['Fira Sans']">
								BHealthy
							</h1>
							<h3 className="text-white font-bold font-['Fira Sans']">
								A New Way to...
							</h3>
						</div>
						<a className="mt-20 pt-20 text-[#113946] text-3xl" href="#about">
							<div className="p-auto text-center justify-center items-center w-[322px] h-[68px] bg-orange-200 rounded-[10px] shadow border-2 border-black">
								Learn More...
							</div>
						</a>
					</div>
				</div>
				<div
					className="bg-[#FFF2D8] mx-auto min-w-full min-h-screen grid max-w-4xl content-center text-center"
					id="about"
				>
					<h1 className="m-13 mb-10 text-5xl">What we do...</h1>
					<p className="py-0 px-20 text-[1.05em] leading-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
						faucibus et molestie ac feugiat sed lectus vestibulum. Fermentum dui
						faucibus in ornare quam viverra. Ultrices gravida dictum fusce ut
						placerat orci nulla pellentesque. Sed ullamcorper morbi tincidunt
						ornare massa. Enim ut sem viverra aliquet eget sit amet. Facilisis
						magna etiam tempor orci eu lobortis elementum. Faucibus a
						pellentesque sit amet. Dolor sit amet consectetur adipiscing elit
						duis tristique. Vitae congue mauris rhoncus aenean vel elit
						scelerisque. Risus quis varius quam quisque id diam vel quam
						elementum. Ultrices gravida dictum fusce ut placerat orci nulla
						pellentesque dignissim. Lorem donec massa sapien faucibus. Blandit
						turpis cursus in hac. Egestas maecenas pharetra convallis posuere
						morbi leo urna molestie at.{" "}
					</p>
				</div>
			</div>
		</main>
	);
}
