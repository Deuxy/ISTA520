{
  "width": 900,
  "height": 400,

  "data": [
    {
      "name": "d",
      "url": "data/surfaceVsLifeBeautified.json"
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "linear",
      "domain": {"data": "d", "field": "SurfaceArea"},
      "range": "width",
      "nice": true,
      "zero": false,
      "round": false
    },
    {
      "name": "yscale",
      "type": "linear",
      "domain": {"data": "d", "field": "LifeExpectancy"},
      "range": "height",
      "nice": true,
      "zero": false,
      "round": false
    }
  ],

  "axes": [
    {
      "type": "x",
      "title": "Surface Area",
      "scale": "xscale"
    },
    {
      "type": "y",
      "title": "Life Expectancy",
      "titleOffset": 70,
      "scale": "yscale"
    }
  ],

  "marks": [
    {
      "type": "line",
      "from": { "data": "d" },
      "properties": {
        "enter": {
          "interpolate": { "value": "linear" },
          "x": { "scale": "xscale", "field": "SurfaceArea"},
          "y": { "scale": "yscale", "field": "LifeExpectancy"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 1}
        }
      }
    },
    {
      "type": "symbol",
      "from": { "data": "d" },
      "properties": {
        "enter": {
          "x": { "scale": "xscale", "field": "SurfaceArea"},
          "y": { "scale": "yscale", "field": "Life Expectancy"},
          "fill": {"value": "#fff"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 1},
          "size": {"value": 49}
        },
        "hover": { "fill": { "value": "#f00" } },
        "update": { "fill": { "value": "#fff" } }
      }
    }

  ]
}
