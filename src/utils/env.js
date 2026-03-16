const site_url = process.env.NEXT_PUBLIC_SITE_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const spaces_url = process.env.NEXT_PUBLIC_SPACES_URL;
const stripe_public_key = process.env.NEXT_PUBLIC_STRIPE_KEY;
const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL; // For backend api calls

export const Env = { site_url, base_url, spaces_url, stripe_public_key, backend_url };
