import Dexie from "dexie";
import dexieCloud from "dexie-cloud-addon";

export const db = new Dexie('Ksoft', {addons: [dexieCloud]});

db.version(1).stores({
  patients: '@id, name, age, gender' // '@' = auto-generated global ID
});

// Connect your dexie-cloud database:
db.cloud.configure({
  databaseUrl: "https://zvn7qd4zx.dexie.cloud",
  requireAuth: true // optional
});
