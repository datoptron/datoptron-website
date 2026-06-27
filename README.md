# Datoptron
Company website — a [Jekyll](https://jekyllrb.com/) static site.

## Running locally

You don't need Ruby or Jekyll installed — only [Docker](https://www.docker.com/).
Everything runs in a container via the `Makefile`.

```bash
make serve
```

Then open **http://localhost:4000**. The site rebuilds automatically as you edit
files, so just save and refresh your browser to see changes.

> First run downloads the Docker image and installs the gems, so it takes a
> minute. Later runs are fast because the gems are cached.

### When you're done

```bash
make down    # stop the site (keeps the gem cache so the next start is fast)
```

Use `make down` for everyday testing. If you want to reclaim disk space (e.g.
you won't touch the site for a while), use `make clean` instead — it also
removes the cached gems, so the next `make serve` will be slow again while they
reinstall.

To fully reclaim disk space, use `make reclaim` — it removes the containers, the
cached gems, **and** the Docker image itself (the largest chunk, a few hundred
MB), which `make clean` leaves in place:

```bash
make reclaim
```

The image is re-downloaded automatically the next time you run `make serve`.

### All commands

| Command      | What it does                                              |
| ------------ | -------------------------------------------------------- |
| `make serve` | Start the site with live-reload at http://localhost:4000 |
| `make down`  | Stop the site (keeps the gem cache)                      |
| `make build` | Build the static site once into `_site/` (no server)     |
| `make logs`  | Tail the container logs                                   |
| `make clean` | Stop the site **and** delete the cached gems             |
| `make reclaim` | Everything `clean` does **and** removes the Docker image |
