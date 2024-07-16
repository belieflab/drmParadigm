# drmParadigm

## Development Guide
```
git clone --recurse-submodules -j8 git@github.com:belieflab/drmParadigm.git && cd drmParadigm && git submodule foreach --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo main)'
```
