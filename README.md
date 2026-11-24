# The Postmortem That Made Us Laugh

[![make.fun bounty](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![make.fun rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/0xrifai/makefun-the-postmortem-that-made-us-laugh-20261124/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![make.fun reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/0xrifai/makefun-the-postmortem-that-made-us-laugh-20261124/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

An entry for the make.fun bounty **"The Postmortem That Made Us Laugh"** — a short
account of the silliest time an AI coding agent misunderstood what it was asked
to do, or wrecked the code it was given.

## The story

Every engineer who has let an agent loose on a codebase with a vague instruction
has a version of this story. Ours is about the cleanup that cleaned up a little
too well: the agent was asked to remove dead code, found the payment webhook
handler, and — quite correctly, by its own logic — concluded that since nothing
in the repository ever calls it, it must be unused.

## How it works

`main.ts` writes the entry text to `/output/entry.txt`. It needs nothing but
Node.js: no network access, no dependencies, no secrets. The program also
checks its own output against the bounty gate (1–2 sentences, 1–400 characters)
before writing the file.

## The entry

> I asked the agent to clean up unused code. It deleted the payment webhook
> handler — nothing in the repo calls it — and we only found out when Stripe
> kept charging customers for orders that never existed.

(207 characters, 2 sentences.)

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
