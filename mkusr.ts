import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const prefix = `# Highly relevant authors like this one are added by Konbini itself, not their owners.
# This is shown in Konbini because of this bs flag:
bs: true
# If you're this author, simply make a PR removing this comment and modifying this manifest to your liking.
# If this is here, it's because at least a package of yours was also added to Konbini.
`;

const cat: "org" | "usr" = process.argv[2] as any;
const usr: string = process.argv[3] as any;
const name: string = process.argv[4] as any;

if (!["org", "usr"].includes(cat)) throw `Invalid category (1st arg)`;
if (!usr || usr.length < 2) throw `Invalid user (2nd arg)`;
if (!name || name.length < 2) throw `Invalid display name (3rd arg)`;

const base = join(cat, usr.slice(0, 2));

if (!existsSync(base)) mkdirSync(base);

const obj: Record<string, any> = {
  name,
};

function findKey(pref: string, key: string, container?: string) {
  const foundKey = process.argv.find((s) => s.startsWith(pref));
  if (foundKey) {
    if (!container) {
      obj[key] = foundKey.slice(pref.length);
      return;
    }
    if (!obj[container]) obj[container] = {};
    obj[container][key] = foundKey.slice(pref.length);
  }
}

findKey("gh:", "github", "socials");
findKey("cb:", "codeberg", "socials");
findKey("gl:", "gitlab", "socials");
findKey("x:", "twitter", "socials");
findKey("bs:", "bluesky", "socials");
findKey("yt:", "youtube", "socials");
findKey("mail:", "email");
findKey("web:", "website");
findKey("bio:", "biography");

writeFileSync(
  join(base, usr + ".yaml"),
  prefix + Bun.YAML.stringify(obj, null, 2),
);
