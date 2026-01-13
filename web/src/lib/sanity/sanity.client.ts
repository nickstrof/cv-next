import { projectId, dataset, apiVersion, useCdn, token } from './sanity.api'
import { createClient } from 'next-sanity'

// Public client (χωρίς token, για client-side ή public server-side requests)
export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

// Private client (με token, ΜΟΝΟ για server-side χρήση)
export const privateClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // πάντα false για να μην cache-άρει sensitive data
  token: token || undefined,
})

// import {
//   type Hero, heroQuery,
// } from './sanity.queries'
// export async function getHeroData(): Promise<Hero> {
// 	if (client) {
// 		return (await client.fetch(heroQuery)) || {}
// 	}
// 	return {}
// }