# Cloudflare Worker API for Bible Cross References

This is an experiment with Cloudflare Workers, serving Bible Cross References. The source data is a subset of what is available at <https://www.openbible.info/labs/cross-references/>.

The API expects a single parameter: an `osisRef`.

For example, to get the cross references for John 3:16, you would make a request to <https://crossreferences.parabible.workers.dev/?osisRef=John.3.16>.