The brand's single graphic device, derived from the central ellipse of the NeoOrtho symbol.

```jsx
<EllipseFrame src="../../assets/photos/photo-new-factory.png" ratio="16 / 10" />

<div style={{position:'relative'}}>
  <img src="../../assets/photos/photo-hands.png" />
  <EllipseOutline width="130%" left="-15%" top="-8%" color="var(--purple-700)" />
</div>
```

The outline is always oversized and cropped by the canvas — it should never read as a closed
decorative ring sitting neatly inside the frame.
