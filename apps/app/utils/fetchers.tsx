// TODO: Turn ETS Graph-endpoints into a ETS package.
// import graphEndpoints from "@ethereum-tag-service/config/graph-endpoints";
import graphEndpoints from "./graphEndpoints";
import { request, gql } from "graphql-request";
type Variables = Record<string, any>; // Define your custom variable types here if needed

export const fetcher = async <T = any,>(query: string, variables: Variables): Promise<T> => {
  // TODO: Make ETS environment "switchable", via a react state context
  // Current ETS_ENVIRONMENTS are development/stage/production
  const environment: string = process.env.NEXT_PUBLIC_ETS_ENVIRONMENT || "development";

  // Use the environment to select the appropriate endpoint
  const GRAPH_API_ENDPOINT: string = graphEndpoints[environment];

  try {
    const data = await request(
      GRAPH_API_ENDPOINT,
      gql`
        ${query}
      `,
      variables,
    );
    return data;
  } catch (error) {
    // Handle errors here if needed
    throw error;
  }
};

// Example usage:
// const data = await fetcher<YourResponseType>(yourQuery, yourVariables);