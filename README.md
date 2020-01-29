# ember-project-taxonomy

Retrieve labels for a given ember project for to analysis.
For taxonomy nerds only. I was curious about what labels we have and how we use them so I wrote these simple scripts to extract that data from GitHub's API.

## quick explorations

```
$ open labels-data.json | get data.repository.labels.edges | get node | sort-by description
```


## hydrating cached JSON

```
yarn data-labels
```

## development setup

- install node + yarn
- install [nu](https://www.nushell.sh/installation.html) for pipeline analysis
- create a personal access token for GH and install to your profile as `GITHUB_PERSONAL_TOKEN`

