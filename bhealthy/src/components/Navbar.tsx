"use client";

import logo from "@/images/extLogo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarLinkItem from "./NavbarLinkItem";

const NAV_LIST = [
	{ text: "Home", href: "/" },
	{ text: "About", href: "/#about" },
	{ text: "Login/Signup", href: "/login" },
];

const Navbar = () => {
	const [navActive, setNavActive] = useState<boolean | null>(null);
	const [activeIdx, setActiveIdx] = useState<number | null>(-1);

	return (
		<header className="">
			<nav
				className="flex p-4 pt-1 pb-1 justify-between items-center bg-[#113946] text-white"
				id="nav"
			>
				<Link className="py-2" href={"/"}>
					BHEALTHY
				</Link>
				<div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div className={`${navActive ? "active" : ""} nav__menu-list`}>
					{NAV_LIST.map((menu, idx) => (
						<div
							onClick={() => {
								setActiveIdx(idx);
								setNavActive(false);
							}}
							key={menu.text}
							id="navbar_item"
						>
							<NavbarLinkItem active={activeIdx === idx} {...menu} />
						</div>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
