const API_URL = process.env.WORDPRESS_GRAPHQL_API_URL

async function fetchAPI(query, { variables } = {}) {
   // console.log("fetchAPI");
	const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})
	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllVehicles() {
    const data = await fetchAPI(`
query MyQuery {
  vehicles {
    edges {
      node {
        title
        slug
      }
    }
  }
}
    `)
    return data?.vehicles.edges
}

export async function getAllVehicleSlugs() {
    const data = await fetchAPI(`
query MyQuery {
  vehicles {
    edges {
      node {
        slug
      }
    }
  }
}
    `)
    return data?.vehicles.edges
}

export async function getVehicleBySlug(slug) {
    const data = await fetchAPI(`
query MyQuery($id: ID!) {
  vehicle(idType: URI, id: $id) {
    title
    slug
  }
}
    `, {
		variables: {
			"id": slug
		}
	})
	return data?.vehicle
}