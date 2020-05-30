<div align="center">
<h1>Visualize Cross Browser Rendering</h1>

<p>Visualize html cross browser rendering of each elements Specifically, how much space it occupies like marigin, padding, border to each html elements in different browsers :-)</p>
</div>

---

<!-- prettier-ignore-start -->
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

_Did you know html elements had an element named [element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) ?_ **Well ! I didn't.**

## Demo:

[Visualize Cross browser Rendering](https://devansvd.github.io/html-elements) - https://devansvd.github.io/html-elements

## Frustration:

- Ever wonder, when you begin writing `markup's` by skimming through the `html` docs, Oh! that's a lot of tags and faced **why the hell the height, margin-top or margin-bottom not applied to span elements ?**

- Then, when you tried to place an html element in certain tiny space hoping it would fit there but it collapses the whole thing and took too much space. **damn !!!**

- Also, Finally when you stuffed that element thing in the top right corner, Said to yourself **Yay!! I did it**, then viewed it in some other browser - **Man !!** Cross browsers.

- Well, this select box is rendered ugly in this specific browser. why ? have to tweak css **Ouch...Ouch...Ouch...**

- `Inline` vs `block` vs `Inline-block` **Oh my !**

And then feel like time to read the docs properly. _hahaha_.

> Night-mare. Real Nightmare. We all been there down the road, I guess.

---

## Questions need answers:

- Want to know how much each browsers apply `margin`, `padding`, `borders` and how it styles the UI for a specific element.

- That's a lot of elements in there how many of them are `inline` ? how many are them are `block` elements ?

---

## Time to overcome:

While finally reading the docs, I was surprised to see few things I did not know before ...

- The `inline` and `block` elements are removed to avoid some confusion from `html5 specs`, new `content categories` are introduced for grouping elements.
- Many `input` types specifically `week picker`.
- `Datalist` as an `autocomplete`, `filter`, `dropdown`, `custom input that's` a handy element.
- `Fieldset` - this draws a nice UI around the element.
- Subtitle `tracks` for a video element, wow! just wow.
- Embedding a whole pdf via `Object` element.
- `Mapping` certain `areas` of an image to make indications. Nice.
- `Details` collapse - expander
- Tables don't have default `borders`. ew
- `Marquee` text dance around. Interesting.

![Content categories](https://raw.githubusercontent.com/devansvd/html-elements/master/images/content-categories.png)

---

## Solution:

- A page to view all the element to reveal their `cross-browser` default rendering without any fancy `css`.
- By placing `each element` Intentionally next to each other and see which are all `inline elements` ? which are all `block elements` ?

---

## Demo:

[Visualize Cross browser Rendering](https://devansvd.github.io/html-elements) - https://devansvd.github.io/html-elements

**Note:** Intentionally not be mobile responsive.

- This is not suppose to be used as a reference(use MDN for that), Intended to visualize default cross browser rendering of each elements Specifically, how much space it occupies like `marigin`, `padding`, `border`.

- Intentionally each elements placed next to each other(`Span tag` is occupied as their heading) to see if that specific element is `inline` or `block` element. **So don't think like page is not aligned properly, What the Hell ?** _Intentionally Ugly_.

Mdn docs are really so good, Credits to them.

I guess I could say this is an **experiment with html elements**.

Feel free to share your thoughts and feedback.

I'm `Devan` - Aka [devansvd](https://github.com/devansvd).

## License

[`MIT`][license]

<!-- prettier-ignore-start -->
[license-badge]: https://img.shields.io/npm/l/eslint-config-devansvd.svg?style=flat-square
[license]: https://github.com/devansvd/eslint-config-devansvd/blob/master/LICENSE
<!-- prettier-ignore-end -->

