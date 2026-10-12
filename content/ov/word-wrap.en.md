---
author: "Noboru Saito"
title: "Word wrap"
description: "Switch between character-based wrapping and word wrapping in ov."
date: 2026-07-21T09:00:00+09:00
lastmod: 2026-10-12T15:00:00+09:00
tags: ["ov", "wrap", "word-wrap"]
images: ["/ov/ov-wordwrap2.png"]
categories: ["ov"]
weight: 93
---

`ov` lets you switch between line wrapping modes.
By default, wrapping is character-based (`-w` / `-w=char`), which may split words at the edge of the screen.

## Wrap modes

![Character-based wrapping](/ov/ov-nowordwrap.png)

* `-w` or `-w=char`: Wrap at the screen width (character-based).
* `-w=word`: Wrap at word boundaries.
* `-w=none`: Disable wrapping.

```console
ov -w=word README.md
```

## Word wrap

With word wrap enabled, long text is less likely to be split in the middle of a word.

![word wrap](/ov/ov-wordwrap2.png)

After launch, you can toggle word wrap with the default key `Alt+w`.

## Indentation with word wrap

Since v0.55.0, you can set the indentation of wrapped lines in `-w=word` mode with `--break-indent`.
You can also configure it after launch with the default key `Ctrl+Alt+n`.

### Indentation options for word wrap

#### `0`: No indentation (default)

![No indentation](/ov/ov-wordwrap2.png)

#### Positive number: Indent by the specified width

Set to 2:

![Positive indentation](/ov/indent2.png)

#### `L`: Align with the leading whitespace of the original line

Set to `L` (`L+0`):

![Align with the leading whitespace of the original line](/ov/indent+0.png)

#### `L+N` / `L-N`: Increase or decrease the width relative to the leading whitespace of the original line

Set to `L+2`. The leading `L` is optional, so `L+2` means the same as `+2`.

![Adjust indentation relative to the leading whitespace of the original line](/ov/indent+2.png)

```console
ov -w=word --break-indent=L+2 README.md
```

## Display markers

Since v0.55.0, you can show markers for wrap positions, line continuations, and truncation at the screen width.
Configure them with `--sign-mode`, or toggle them after launch with the default key `Ctrl+Alt+m`.
The default value `0` hides all markers. Specify a value by adding the bit values for each marker.

![Display markers 1](/ov/ov-marker1.png)

![Display markers 2](/ov/ov-marker2.png)

| Value | Markers shown | Conditions |
| --- | --- | --- |
| `1` | `↳` | At the beginning of a wrapped line |
| `2` | `↵` | At the end of a line before it wraps |
| `4` | `…` | At the end of a line that exceeds the screen width when wrapping is disabled |
| `3` | `↳` and `↵` | Combines `1` and `2` |
| `5` | `↳` and `…` | Combines `1` and `4` |
| `6` | `↵` and `…` | Combines `2` and `4` |
| `7` | All | Combines `1`, `2`, and `4` |

`↳` and `↵` are shown when wrapping is enabled. `…` is shown when wrapping is disabled and a line exceeds the screen width.

```console
ov -w=word --sign-mode=3 README.md
```
