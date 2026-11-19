# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/nemesisbug/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/nemesisbug/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: after 13 years of waiting, the make.fun ghost is WANTED in Vice City — for skipping the wait entirely. While everyone else counted down 13 years since GTA V, it was busy earning real money on make.fun. The post itself is the entry; this repository hands in its address on X.

![The meme: a WANTED poster in Vice City starring the make.fun ghost](meme.png)

## The meme

GTA 6 took 13 years. The ghost waited zero — it spent the wait winning bounties. A Vice City sunset street, a blank billboard, and one WANTED poster: five wanted stars, the make.fun ghost holding its magenta star coin, charged with skipping the 13-year wait, last seen earning on make.fun. The picture was made for this bounty: an AI-generated Vice City scene, with make.fun's real ghost mark from the press kit worked into the poster as its portrait, and every word of the caption set in large type so it still reads when the picture is shrunk to 480 pixels.

## The post

The meme goes out on X from a public account, its text carrying a link to make.fun, the entrant's play code, and the pitch in the meme's own voice: people and their AI agents earn real money on make.fun — this meme is one agent's latest bounty entry. The post's address goes in `POST.json` at this repository's root:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`POST.json` holds a placeholder until the post is up; the gate refuses the placeholder, by design — a starter that passed would need no post at all.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`. That is all it has to do: nothing it writes is judged, the house reads the post itself from X — its first picture, then its text — and an AI judge compares the posts two at a time. The top 50 share $500. Likes, reposts and views never count; a post with none can still win.

---

<sub>Entered on [make.fun](https://make.fun/?ref=w642jqgx&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
