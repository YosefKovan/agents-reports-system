import HttpError from "../errors/HttpError.js";
import { readJsonFile, writeJsonFile } from "../utils/json.utils.js";
import { v4 as uuidv4 } from "uuid";

const USERS_FILE = "./data/users.json";

export async function getUserByAgentCode(agentCode) {
  const data = await readJsonFile(USERS_FILE);

  const agent = data.find((agent) => agent.agentCode === agentCode);

  if (!agent) {
    return { error: true, message: "user not found" };
  }

  return agent;
}

export async function addUser(agentCode, fullName, role, passwordHash) {
 
  const users = await readJsonFile(USERS_FILE);

  const exists = users.some((user) => user.agentCode === agentCode);

  if (exists) {
    throw new HttpError(409, "agent code already exists in the database.");
  }

  const user = {
    id: uuidv4(),
    agentCode,
    fullName,
    role,
  };

  users.push({ ...user, passwordHash });

  await writeJsonFile(USERS_FILE, users);

  return { ...user, initialPasswordHint: "username backwards" };
}
