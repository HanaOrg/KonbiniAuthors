# `KonbiniAuthors` registry

This repo holds all manifest files for Konbini publishers.

## Registration

To register, follow our [documentation](https://github.com/HanaOrg/Konbini/blob/master/doc/README.md), and submit a Pull Request with your author manifest file, containing all required fields.

---

Just as with other package managers, you'll find community added manifests. Konbini itself may add manifest files for relevant publishers (required for package manifests which is what goes first).

## Verification

You'll find developers with `verified: true` in their manifest. Do not set this to true directly; make a Pull Request changing that to true once you meet this criteria:

- At least one update has been released to any of your published packages within the last 90 days.
- At least one **non-trivial** commit has been made to any of your published packages' repositories within the last 60 days.
- A valid email address, website, and biography are provided in your author manifest.
- Your history is clean — meaning no confirmed reports of spam, hacking, or other malicious practices against you on any platform.
