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

> ### section: </br>
>
> Are glorified "containers to group widgets.
> maybe Gutenberg has something akin to this </br>
> just skip this for now

> ### column:
>
> Another Layout Group dividing the page in parts. </br>
> column (widget) -> column (block)

> ### heading:
>
> need to watch which heading level. </br>
> heading (widget) -> heading (block)

> ###
