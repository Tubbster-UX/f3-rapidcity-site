import { GraphQLClient } from "graphql-request";

// Initialize the GraphQL client with the endpoint from the environment variable
const client = new GraphQLClient(import.meta.env.ASTRO_GRAPHQL_ENDPOINT);

// Function to make GraphQL requests
export const fetchGraphQL = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
    return client.request<T>(query, variables);
};