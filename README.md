# Math.percent

| Problem | Method of `Math.percent` |
|--|--|
| $p\\%$ from $a$ | `pa(p,a)` or `ap(a,p)` |
| number whose $p\\%$ equals $b$ | `pb(p,b)` or `bp(b,p)` |
| percentage of $b$ in $a$ | `ab(a,b)` or `ba(b,a)` |

> To remember names of these methods, you can associate `p` with _percent_, `a` with greater number (or entire/context number) and `b` with less number (number being a part of the entire number - `a`)

## Example

```
Math.percent.pa(25,200)
// 50 (25% from 200 is 50)

Math.percent.pb(25,50)
// 200 (200 is number whose 25% is 50)

Math.percent.ab(200,50)
// 25 (25% is percentage of b in a)
```
