const crossrefs = require("./cf.json")

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url)
      if (!url.searchParams.has("osisRef")) {
        return new Response("Missing osisRef query parameter", {
          status: 400,
          headers: {'Access-Control-Allow-Origin': '*'}
        })
      }
      const ref = url.searchParams.get('osisRef')
        const [book, chapter, verse] = ref.split(".")
        if (crossrefs[book][chapter][verse]) {
            return new Response(JSON.stringify(crossrefs[book][chapter][verse]), {
              headers: {'Access-Control-Allow-Origin': '*'}
            })
        }
        return new Response(JSON.stringify([]), {
          status: 200,
          headers: {'Access-Control-Allow-Origin': '*'}
        })
    } catch(err) {
      return new Response(err.stack, {
        status: 500,
        headers: {'Access-Control-Allow-Origin': '*'}
      })
    }
  }
}