# VersionPress dev scripts

Scripts that overgrew the one-liners in `package.json`.

## Dev setup

`npm install` is run as part of root's post-install script so you should be fine.

Scripts can be run during development like this:

```
node -r ts-node/register build.ts
```

The repo-root `package.json` scripts then call them like this:

```
node -r ./scripts/node_modules/ts-node/register scripts/build.ts
```

## Debugging scripts

To debug a script, add `--inspect-brk`:

```
node -r ts-node/register --inspect-brk build.ts
```

Then in VSCode, create a "Node attach" configuration and run it.
