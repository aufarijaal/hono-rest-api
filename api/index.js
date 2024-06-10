import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Congrats! You've deployed Hono to Vercel" });
});

app.get("/icons", (c) => {
  c.header("Content-Type", "image/svg+xml");
  return c.body(`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="11" fill="url(#paint0_linear_3_8)"/>
  <g clip-path="url(#clip0_3_8)">
  <rect x="3" y="3" width="42" height="42" rx="9" fill="url(#paint1_linear_3_8)"/>
  <g clip-path="url(#clip1_3_8)">
  <path d="M26.5543 36.5844C25.9162 37.3885 24.6199 36.9481 24.6057 35.9209L24.3799 20.9002H34.4805C36.3096 20.9002 37.3295 23.0129 36.192 24.4449L26.5543 36.5844Z" fill="url(#paint2_linear_3_8)"/>
  <path d="M26.5543 36.5844C25.9162 37.3885 24.6199 36.9481 24.6057 35.9209L24.3799 20.9002H34.4805C36.3096 20.9002 37.3295 23.0129 36.192 24.4449L26.5543 36.5844Z" fill="url(#paint3_linear_3_8)" fill-opacity="0.2"/>
  <path d="M22.4461 12.4156C23.0842 11.6115 24.3807 12.052 24.3947 13.0789L24.4939 28.0998H14.5199C12.6908 28.0998 11.6709 25.9871 12.8082 24.5551L22.4461 12.4156Z" fill="#3ECF8E"/>
  </g>
  <g opacity="0.26" clip-path="url(#clip2_3_8)" filter="url(#filter0_f_3_8)">
  <path d="M14.869 29.3184C13.8226 30.6371 11.6967 29.9148 11.6733 28.2303L11.303 3.59631H27.868C30.8677 3.59631 32.5404 7.06113 30.6749 9.40967L14.869 29.3184Z" fill="url(#paint4_linear_3_8)"/>
  <path d="M14.869 29.3184C13.8226 30.6371 11.6967 29.9148 11.6733 28.2303L11.303 3.59631H27.868C30.8677 3.59631 32.5404 7.06113 30.6749 9.40967L14.869 29.3184Z" fill="url(#paint5_linear_3_8)" fill-opacity="0.2"/>
  <path d="M8.13158 -10.3184C9.17804 -11.6371 11.3043 -10.9148 11.3273 -9.23059L11.4901 15.4037H-4.86734C-7.86707 15.4037 -9.53974 11.9389 -7.67456 9.59033L8.13158 -10.3184Z" fill="#3ECF8E"/>
  </g>
  <g opacity="0.38" clip-path="url(#clip3_3_8)" filter="url(#filter1_f_3_8)">
  <path d="M27.5543 58.5844C26.9162 59.3885 25.6199 58.9481 25.6057 57.9209L25.3799 42.9002H35.4805C37.3096 42.9002 38.3295 45.0129 37.192 46.4449L27.5543 58.5844Z" fill="url(#paint6_linear_3_8)"/>
  <path d="M27.5543 58.5844C26.9162 59.3885 25.6199 58.9481 25.6057 57.9209L25.3799 42.9002H35.4805C37.3096 42.9002 38.3295 45.0129 37.192 46.4449L27.5543 58.5844Z" fill="url(#paint7_linear_3_8)" fill-opacity="0.2"/>
  <path d="M23.4461 34.4156C24.0842 33.6115 25.3807 34.052 25.3947 35.0789L25.4939 50.0998H15.5199C13.6908 50.0998 12.6709 47.9871 13.8082 46.5551L23.4461 34.4156Z" fill="#3ECF8E"/>
  </g>
  </g>
  <defs>
  <filter id="filter0_f_3_8" x="-20.8" y="-22.8" width="64.6" height="64.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="5.9" result="effect1_foregroundBlur_3_8"/>
  </filter>
  <filter id="filter1_f_3_8" x="6" y="27" width="39" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_3_8"/>
  </filter>
  <linearGradient id="paint0_linear_3_8" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
  <stop stop-color="#D9D9D9"/>
  <stop offset="0.5" stop-color="#616161"/>
  <stop offset="1" stop-color="#D9D9D9"/>
  </linearGradient>
  <linearGradient id="paint1_linear_3_8" x1="45" y1="3" x2="3" y2="45" gradientUnits="userSpaceOnUse">
  <stop stop-color="#010101"/>
  <stop offset="1" stop-color="#121212"/>
  </linearGradient>
  <linearGradient id="paint2_linear_3_8" x1="24.3808" y1="24.2317" x2="33.3574" y2="27.9964" gradientUnits="userSpaceOnUse">
  <stop stop-color="#249361"/>
  <stop offset="1" stop-color="#3ECF8E"/>
  </linearGradient>
  <linearGradient id="paint3_linear_3_8" x1="20.401" y1="18.7826" x2="24.4947" y2="26.4892" gradientUnits="userSpaceOnUse">
  <stop/>
  <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint4_linear_3_8" x1="11.3045" y1="9.05997" x2="26.0261" y2="15.2341" gradientUnits="userSpaceOnUse">
  <stop stop-color="#249361"/>
  <stop offset="1" stop-color="#3ECF8E"/>
  </linearGradient>
  <linearGradient id="paint5_linear_3_8" x1="4.7776" y1="0.123485" x2="11.4913" y2="12.7623" gradientUnits="userSpaceOnUse">
  <stop/>
  <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint6_linear_3_8" x1="25.3808" y1="46.2317" x2="34.3574" y2="49.9964" gradientUnits="userSpaceOnUse">
  <stop stop-color="#249361"/>
  <stop offset="1" stop-color="#3ECF8E"/>
  </linearGradient>
  <linearGradient id="paint7_linear_3_8" x1="21.401" y1="40.7826" x2="25.4947" y2="48.4892" gradientUnits="userSpaceOnUse">
  <stop/>
  <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="clip0_3_8">
  <rect x="3" y="3" width="42" height="42" rx="9" fill="white"/>
  </clipPath>
  <clipPath id="clip1_3_8">
  <rect width="25" height="25" fill="white" transform="translate(12 12)"/>
  </clipPath>
  <clipPath id="clip2_3_8">
  <rect width="41" height="41" fill="white" transform="translate(-9 -11)"/>
  </clipPath>
  <clipPath id="clip3_3_8">
  <rect width="25" height="25" fill="white" transform="translate(13 34)"/>
  </clipPath>
  </defs>
  </svg>`);
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
