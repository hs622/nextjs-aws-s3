"use server";

import { API_BASE_URL } from "@/lib/constants";
import { ICustomer } from "@/types/customer";

export async function GetUsersData({
  limit,
  skip,
}: { limit?: number; skip?: number } = {}) {
  let calling_URL = `${API_BASE_URL}/users`;

  // If the limit and the skip were both defined, what what would be the case?
  // If only limit were defined...

  if (limit && skip) {
    calling_URL += `?limit=${limit}&skip=${skip}`;
  } else if (limit && !skip) {
    calling_URL += `?limit=${limit}`;
  }

  console.log(calling_URL);
  const data = await fetch(calling_URL);
  const decode_body: {
    users: ICustomer[],
    limit: number,
    skip: number,
    total: number
  } = await data.json();

  const bools = Boolean(Math.random().toFixed())

  const refinedData = decode_body.users.map(user => {
    return {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      status: bools,
      purchaseCount: 48555,
    };
  });

  return refinedData;
}

