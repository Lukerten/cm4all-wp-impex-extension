## What the plan is

> Elementor "Blocks" are defined by an ELType.
> in the handler object we define functions with the same name
> as their corresponding ELType.
> these will handle our transformation for us

### Structure

Data we recieve from Elementor (-stuff we dont need)

```json
{
  "elType": "section",
  "settings": [],
  "elements": []
}
```

we need to transform this into something like this.

```json
{
  "type": "core/paragraph",
  "attributes": {},
  "innerBlocks": []
}
```

note that their structure is similar enough that we can probably map almost everything in a 1:1 manner

## Mappings + Notes

<ul>
  <li> <e> section </e>  <a> — </a> <g> group </g> </li>
  <li> <e> column </e>  <a> — </a> <g> column </g> </li>
  <li> <e> inner Section </e>  <a> — </a> <g> paragraph </g> </li>
  <li> <e> heading </e>  <a> — </a> <g> heading </g> </li>
  <li> <e> image </e>  <a> — </a> <g> image </g> </li>
  <li> <e> button </e>  <a> — </a> <g> button </g> </li>
  <li> <e> icon </e>  <a> — </a> <g> site-logo </g> </li>
  <li> <e> testimonial </e>  <a> — </a> <g> pullquote </g> </li>
</ul>

<style>
  e {
    font-size:16px;
    font-weight:700;
  }
  a {
    font-size:16px;
    font-weight:300;
    color: orange;
  }
  g {
    font-size:16px;
    font-weight:700;
  }

</style>
