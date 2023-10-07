import { parse, serialize } from "cookie";

const MAX_AGE = 60 * 60 * 24 * 7;

export function setAuthCookies({
	res,
	accessToken,
	refreshToken,
}: {
	res: any;
	accessToken: any;
	refreshToken: any;
}) {
	const accessTokenCookie = serialize("access_token", accessToken, {
		maxAge: MAX_AGE,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production", // Set "secure" to true in production
		path: "/",
	});

	const refreshTokenCookie = serialize("refresh_token", refreshToken, {
		maxAge: MAX_AGE,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production", // Set "secure" to true in production
		path: "/",
	});

	res.setHeader("Set-Cookie", [accessTokenCookie, refreshTokenCookie]);
}

// Function to get JWT tokens from cookies
export function getAuthCookies(req: any) {
	return parse(req.headers.cookie || "");
}
