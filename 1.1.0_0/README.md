### interesting stuff 

# get current tabs list
await ts2.GChromeWindow.getLastFocused(populate=true).then(w => w.tabs.map(t => t.url))

### Issue encountered along the way
