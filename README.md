## Usage

```bash
npm run akerman --input=<n,m>
```

N and M are user inputs separated by comma.
If run without input, akerman will use default value n = 3 m = 2.

To test Node load just move akerman fn out of module and run pm2

```bash
p2m start node akerman.js
```
